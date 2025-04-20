import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const GET_TELEGRAM_LINK_KEY = ["profile", "telegram link"];

export const useGetTelegramLink = () =>
    useQuery({
        queryKey: GET_TELEGRAM_LINK_KEY,
        queryFn: apiService.users.getTelegramLink,
    });
