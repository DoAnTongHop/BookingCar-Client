import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'http://192.168.100.16:4000/'

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(config => {
    return config;
});

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    };
    return response;
})

export default axiosClient;