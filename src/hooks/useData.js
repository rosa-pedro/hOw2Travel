import axios from 'axios';
import {useQuery} from "react-query";

const fetchData = async (line_id) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/data /last /${line_id}`);
    return data;
};

const useData = (line_id) => useQuery(['data', line_id], () => fetchData(line_id));
export default useData;
