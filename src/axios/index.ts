import { authTokenKey } from "@/constants";
import axios from "axios";
const instanse = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${typeof window !== "undefined" ? window.localStorage.getItem(authTokenKey) : ""}`;
    return config;
});

export default instanse;
