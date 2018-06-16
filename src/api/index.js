import axios from 'axios';


export * from './specs';

axios.defaults.baseURL = process.env.REACT_APP_ZORKO_SERVER_BASE_URL;
