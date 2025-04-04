import { authTokenKey } from "@/constants";
import { BASE_URL } from "@/constants/api";
import axios from "axios";
const instanse = axios.create({
    baseURL: BASE_URL,
});

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${typeof window !== "undefined" ? window.localStorage.getItem(authTokenKey) : ""}`;
    return config;
});

export default instanse;
