import { useQuery } from "@tanstack/react-query";

const useGetAdsListQuery = () =>
    useQuery({
        queryKey: ["ads-list"],
        queryFn: async () => {},
    });

export default useGetAdsListQuery;
