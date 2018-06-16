import axios from 'axios';
import {API_DEFAULT_PAGGINATION_OPTIONS} from "../constants";

export const fetchSpecLookups = async (options = API_DEFAULT_PAGGINATION_OPTIONS) => {
    const response = await axios.get('/specs', { params : options});
    return response.data;
};


axios.defaults.baseURL = process.env.REACT_APP_ZORKO_SERVER_BASE_URL;
