import { apiService } from "@/services";
import { TTemplateEditType } from "@/store/useCreateAdvertisement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ADV_TEMPLATES_KEYS } from "./useGetAdvTemplates";

export const useUpdateAdvTemplates = (type: TTemplateEditType) => {
    const queryClient = useQueryClient();
    let config: {
        request: (template: string) => Promise<unknown>;
    };

    switch (type) {
        case "conditions":
            config = {
                request: apiService.seller.updateAdvConditionsTemplate,
            };
            break;
        case "instructions":
            config = {
                request: apiService.seller.updateAdvInstructionsTemplate,
            };
            break;
        case "reviewsCriteria":
            config = {
                request: apiService.seller.updateAdvCriteriaTemplate,
            };
            break;
        default:
            throw new Error(
                `Недействительный тип (${type}) для useUpdateAdvTemplates`,
            );
    }

    return useMutation({
        mutationKey: [],
        mutationFn: config.request,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: GET_ADV_TEMPLATES_KEYS(type),
            });
        },
        retry: false,
    });
};
