import axios from 'axios';
import {useQuery} from "react-query";

const fetchVehicles = async (line_id) => {
    const {data} = await axios.get(`http://193.191.177.75:3300/vehicle/${line_id}`);
    return data;
};

const useVehicles = (line_id) => useQuery(['data', line_id], () => fetchVehicles(line_id));
export default useVehicles;
