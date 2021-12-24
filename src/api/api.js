import axios from "axios";
import store from "./../store";
const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = store.state.auth.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
