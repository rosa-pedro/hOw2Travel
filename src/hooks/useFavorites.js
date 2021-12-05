import axios from 'axios';
import {useQuery} from "react-query";

const fetchFavorites = async (email) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/favourite/${email}`);
    return data;
};

const useFavorites = (email) => useQuery(['favorites', email], () => fetchFavorites(email));
export default useFavorites;
