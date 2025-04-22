import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services";
import { RemoveFromFavoriteData } from "@/services/FavoritesService";
import { getFavoritesKey } from "./useGetFavoritesQuery";
import Product from "@/types/api/Product";
import toast from "react-hot-toast";
import { serverErrorToastHandler } from "@/handlers";
const useFavoritesRemoveMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["favorites-remove"],
        mutationFn: async (data: RemoveFromFavoriteData) => {
            const res = await apiService.favorites.removeFromFavorites(data);

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
            console.log(
                oldData,
                oldData.filter((el) => el.product.id !== data.req.product_id),
            );

            queryClient.setQueryData(
                getFavoritesKey,
                oldData.filter((el) => el.product.id !== data.req.product_id),
            );

            toast.success("Товар успешно убран из избранного");
        },
        onError: (e) => {
            serverErrorToastHandler(
                e,
                "Не удалось удалить товар из избранного",
            );
        },
    });
};

export default useFavoritesRemoveMutation;
