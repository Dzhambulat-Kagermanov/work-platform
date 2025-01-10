import { sessionQueryKeys } from "@/hooks/api/auth/useSessionQuery";
import { User } from "@/types/api";
import { QueryClient } from "@tanstack/react-query";

const setQuerySessionDataHandler = (queryClient: QueryClient, user: User) => {
    queryClient.setQueryData(sessionQueryKeys, user);
}

export default setQuerySessionDataHandler;