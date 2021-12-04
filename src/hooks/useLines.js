import axios from 'axios';
import {useQuery} from "react-query";

const fetchLines = async () => {
    const {data} = await axios.get('http://193.191.177.75:3300/line');
    return data;
};

const useLines = () => useQuery('lines', fetchLines);
export default useLines;
