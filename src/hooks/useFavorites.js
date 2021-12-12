import axios from 'axios';
import {useMutation, useQuery, useQueryClient} from "react-query";

const fetchFavorites = async (email) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/favourite/${email}`);
    return data;
};

const useFavorites = (email) => useQuery(['favorites', email], () => fetchFavorites(email));


const fetchLineFavorites = async (lineId) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/favourite/all/${lineId}`);
    return data;
};

const useLineFavorites = (lineId) => useQuery(['favorites', lineId], () => fetchLineFavorites(lineId));


const addFavorite = (email, id) => {
    const queryClient = useQueryClient();

    return useMutation(
        () => axios.post(`http://193.191.177.75:3300/favourite/${email}/${id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['favorites', email]);
            },
        }
    )
};


const removeFavorite = (email, id) => {
    const queryClient = useQueryClient();

    return useMutation(
        () => axios.delete(`http://193.191.177.75:3300/favourite/${email}/${id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['favorites', email]);
            },
        }
    )
};


export {useFavorites, useLineFavorites, addFavorite, removeFavorite};
