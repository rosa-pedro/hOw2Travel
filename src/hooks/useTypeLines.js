import axios from 'axios';
import {useQuery} from "react-query";

const fetchLines = async (type) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/line/${type}`);
    return data;
};

const useLines = (type) => useQuery(['lines', type], () => fetchLines(type));
export default useLines;
