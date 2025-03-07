import axios from "./axiosCustomize";

const createUserApi = (firstName, lastName, email, phone, password) => {
    const URL_API = "v1/api/register";
    const data = {
        firstName, lastName, email, phone, password
    }
    return axios.post(URL_API, data);
}

export {
    createUserApi,
}