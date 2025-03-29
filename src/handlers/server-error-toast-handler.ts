import { AxiosError } from "axios";
import toast from "react-hot-toast";

const serverErrorToastHandler = (error: Error, altText: string) => {
    const e = error as AxiosError<{ message: string }>;
    toast.error(e.response?.data?.message || altText);
};

export default serverErrorToastHandler;
