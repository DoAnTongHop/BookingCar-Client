import ENDPOINT from "./constant";
import axiosClient from './axiosClient';

const userApi = {
    login: (phone, password) => {
        const url = ENDPOINT.LOGIN;
        return axiosClient.post(
            url,
            {
                phone,
                password
            }
        )
    }
}