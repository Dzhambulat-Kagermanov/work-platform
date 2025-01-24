import { TActionItemProps } from "@/components/ui/Action";
import {
    SALESMAN_ADVERTISEMENT_STOP_MODAL,
    SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL,
} from "@/constants";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { useSellerStore } from "@/store";
import { adsIdsSelector, productIdsSelector } from "@/store/useSellerStore";
import {
    useArchiveAdsMutation,
    useDuplicateAdsMutation,
} from "@/hooks/api/seller";

export const ACTION_CONTENT: (
    showModal: (param: { slug: string }) => void,
    homePageType: TSalesmanHomePageType,
) => TActionItemProps[][] = (showModal, homePageType) => {
    const selectedProducts = useSellerStore(productIdsSelector);
    const selectedAds = useSellerStore(adsIdsSelector);

    const { mutate: duplicateAdsMutate, isPending: duplicateAdsPending } =
        useDuplicateAdsMutation();

    const disabledAds = !selectedAds.length || duplicateAdsPending;

    return homePageType === null
        ? [
              [
                  {
                      onClick: () => {},
                      text: "Остановить",
                      disabled: !selectedProducts.length,
                  },
                  {
                      onClick: () => {},
                      text: "Архивировать",
                      disabled: !selectedProducts.length,
                  },
              ],
              [
                  {
                      onClick: () => {},
                      text: "Все товары",
                  },
                  {
                      onClick: () => {},
                      text: "Активные",
                  },
                  {
                      onClick: () => {},
                      text: "Остановленные",
                  },
                  {
                      onClick: () => {},
                      text: "Архивированные",
                  },
              ],
          ]
        : [
              [
                  {
                      onClick: () => {
                          showModal({
                              slug: SALESMAN_ADVERTISEMENT_STOP_MODAL,
                          });
                      },
                      text: "Остановить",
                      disabled: disabledAds,
                  },
                  //   {
                  //       onClick: () => {},
                  //       text: "Редактировать",
                  //   },
                  {
                      onClick: () => {
                          if (disabledAds) {
                              return;
                          }

                          duplicateAdsMutate({
                              ad_ids: selectedAds,
                          });
                      },
                      text: "Дублировать",
                      disabled: disabledAds,
                  },
                  {
                      onClick: () => {
                          showModal({
                              slug: SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL,
                          });
                      },
                      text: "Архивировать",
                      disabled: disabledAds,
                  },
              ],
              [
                  {
                      onClick: () => {},
                      text: "Все объявления",
                  },
                  {
                      onClick: () => {},
                      text: "Активные",
                  },
                  {
                      onClick: () => {},
                      text: "Остановленные",
                  },
                  {
                      onClick: () => {},
                      text: "Архивированные",
                  },
              ],
          ];
};
