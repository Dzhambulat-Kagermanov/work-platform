import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useRoleSwitch = () =>
    useMutation({
        mutationFn: apiService.users.roleSwitch,
    });
