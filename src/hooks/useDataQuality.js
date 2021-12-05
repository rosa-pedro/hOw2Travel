import axios from 'axios';
import {useQuery} from "react-query";

const fetchDataQuality = async (line_id) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/data/lastquality/${line_id}`);
    return data;
};

const useDataQuality = (line_id) => useQuery(['dataQuality', line_id], () => fetchDataQuality(line_id));
export default useDataQuality;
