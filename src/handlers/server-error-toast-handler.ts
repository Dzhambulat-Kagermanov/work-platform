import { AxiosError } from "axios";
import toast from "react-hot-toast";

const serverErrorToastHandler = (error: Error, altText: string) => {
    const e = error as AxiosError<{ message: string }>;
    const errorMessage = e.response?.data?.message || altText;
    
    // Skip showing toast for authentication errors
    if (errorMessage === 'Unauthenticated') {
        return;
    }
    
    toast.error(errorMessage);
};

export default serverErrorToastHandler;
