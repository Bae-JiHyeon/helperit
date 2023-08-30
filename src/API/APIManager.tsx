import axios from 'axios'

const APIManager = axios.create({
    baseURL:"서버 주소",
    responseType: "json",
    withCredentials: true,
});

export default APIManager;
