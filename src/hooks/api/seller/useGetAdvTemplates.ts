import { apiService } from "@/services";
import { TTemplateEditType } from "@/store/useCreateAdvertisement";
import { TTemplate } from "@/types/api/Template";
import { useQuery } from "@tanstack/react-query";

export const GET_ADV_TEMPLATES_KEYS = (type: TTemplateEditType) => [
    "create-advertisement",
    "templates",
    type,
];

export const useGetAdvTemplates = (type: TTemplateEditType) => {
    let config: {
        request: () => Promise<TTemplate>;
    };

    switch (type) {
        case "conditions":
            config = {
                request: apiService.seller.getAdvConditionsTemplates,
            };
            break;
        case "instructions":
            config = {
                request: apiService.seller.getAdvInstructionsTemplates,
            };
            break;
        case "reviewsCriteria":
            config = {
                request: apiService.seller.getAdvReviewsTemplates,
            };
            break;
        default:
            throw new Error(
                `Недействительный тип (${type}) для useUpdateAdvTemplates`,
            );
    }

    return useQuery({
        queryKey: GET_ADV_TEMPLATES_KEYS(type),
        queryFn: config.request,
        retry: false,
    });
};
