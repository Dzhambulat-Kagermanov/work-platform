import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services";
import { AddToFavoriteData } from "@/services/FavoritesService";
import Product from "@/types/api/Product";
import { getFavoritesKey } from "./useGetFavoritesQuery";
import toast from "react-hot-toast";
import { serverErrorToastHandler } from "@/handlers";
const useFavoritesAddMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["favorites-add"],
        mutationFn: async (data: AddToFavoriteData) => {
            const res = await apiService.favorites.addToFavorites(data);

            return {
                res,
                req: data,
            };
        },
        onSuccess: (data) => {
            if (data.res.status !== 200) {
                return;
            }

            const oldData =
                queryClient.getQueryData<Product[]>(getFavoritesKey);

            if (!oldData) {
                return;
            }

            queryClient.setQueryData(getFavoritesKey, [
                ...(oldData ? oldData : []),
            ]);

            toast.success("Товар успешно добавлен в избранное");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось добавить товар в избранное");
        },
    });
};

export default useFavoritesAddMutation;
