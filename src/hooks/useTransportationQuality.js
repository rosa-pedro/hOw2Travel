import axios from 'axios';
import {useQuery} from "react-query";

const fetchTransportationQuality = async (line_id) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/ai/${line_id}`);
    return data;
};

const useTransportationQuality = (line_id) => useQuery(['transportationQuality', line_id], () => fetchTransportationQuality(line_id));
export default useTransportationQuality;
