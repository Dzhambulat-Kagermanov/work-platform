import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_NOTIFICATIONS = ["notifications"];

export const useGetNotifications = () =>
    useQuery({
        queryFn: () => apiService.notifications.getNotifications(),
        queryKey: GET_NOTIFICATIONS,
        refetchInterval: 30000,
    });
