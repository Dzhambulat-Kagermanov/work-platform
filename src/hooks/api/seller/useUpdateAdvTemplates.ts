import { apiService } from "@/services";
import { TTemplateEditType } from "@/store/useCreateAdvertisement";
import { useMutation } from "@tanstack/react-query";

export const useUpdateAdvTemplates = (type: TTemplateEditType) => {
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
        retry: false,
    });
};
