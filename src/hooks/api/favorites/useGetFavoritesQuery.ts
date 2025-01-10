import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getFavoritesKey = ["favorites-list"];

const useGetFavoritesQuery = () =>
    useQuery({
        queryKey: getFavoritesKey,
        queryFn: async () => {
            const res = await apiService.favorites.getFavorites();

            return res.favorites;
        },
        staleTime: Infinity,
        retry: false,
    });

export default useGetFavoritesQuery;
