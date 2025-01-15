import { useMutation } from "@tanstack/react-query";

const useAddWbProductMutation = () => (
    useMutation({
        mutationKey: ["wb-add-product"],
        mutationFn: async () => {
            
        }
    })
);

export default useAddWbProductMutation