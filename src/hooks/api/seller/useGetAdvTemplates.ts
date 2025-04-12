import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_ADV_TEMPLATES_KEYS = ["create-advertisement", "templates"];

export const useGetAdvTemplates = () => {
    // let config: {
    //     request: (template: string) => Promise<unknown>;
    // };

    // switch (type) {
    //     case "conditions":
    //         config = {
    //             request: apiService.seller.updateAdvConditionsTemplate,
    //         };
    //         break;
    //     case "instructions":
    //         config = {
    //             request: apiService.seller.updateAdvInstructionsTemplate,
    //         };
    //         break;
    //     case "reviewsCriteria":
    //         config = {
    //             request: apiService.seller.updateAdvCriteriaTemplate,
    //         };
    //         break;
    //     default:
    //         throw new Error(
    //             `Недействительный тип (${type}) для useUpdateAdvTemplates`,
    //         );
    // }

    return useQuery({
        queryKey: GET_ADV_TEMPLATES_KEYS,
        queryFn: apiService.seller.getAdvTemplates,
        retry: false,
    });
};
