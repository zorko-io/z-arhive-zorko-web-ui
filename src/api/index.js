import axios from 'axios';

export const fetchSpecLookups = async () => {
    const response = await axios.get('/specs');
    return response.data;
};


axios.defaults.baseURL = process.env.REACT_APP_ZORKO_SERVER_BASE_URL;
