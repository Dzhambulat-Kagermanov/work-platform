import { TActionItemProps } from "@/components/ui/Action";
import { SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from "@/constants";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { useSellerStore } from "@/store";
import { adsIdsSelector, productIdsSelector } from "@/store/useSellerStore";
import {
    useDuplicateAdsMutation,
    useStopAdsMutation,
    useStopProductsMutation,
} from "@/hooks/api/seller";
import useArchiveProductsMutation from "@/hooks/api/seller/useArchiveProductsMutation";

export const ACTION_CONTENT: (
    showModal: (param: { slug: string }) => void,
    homePageType: TSalesmanHomePageType,
) => TActionItemProps[][] = (showModal, homePageType) => {
    const selectedProducts = useSellerStore(productIdsSelector);
    const selectedAds = useSellerStore(adsIdsSelector);

    const { mutate: stopProductsMutate, isPending: stopProductsPending } =
        useStopProductsMutation();
    const { mutate: archiveProductsMutate, isPending: archiveProductsPending } =
        useArchiveProductsMutation();

    const { mutate: duplicateAdsMutate, isPending: duplicateAdsPending } =
        useDuplicateAdsMutation();

    const { mutate: stopAdsMutate, isPending: stopAdsPending } =
        useStopAdsMutation();

    const disabledProducts =
        !selectedProducts.length ||
        stopProductsPending ||
        archiveProductsPending;

    const disabledAds =
        !selectedAds.length || duplicateAdsPending || stopAdsPending;

    const productsData = {
        product_ids: selectedProducts,
    };

    const adsData = {
        ad_ids: selectedAds,
    };

    return homePageType === null
        ? [
              [
                  {
                      onClick: () => {
                          if (disabledProducts) {
                              return;
                          }

                          stopProductsMutate(productsData);
                      },
                      text: "Остановить",
                      disabled: disabledProducts,
                  },
                  {
                      onClick: () => {
                          if (disabledProducts) {
                              return;
                          }

                          archiveProductsMutate(productsData);
                      },
                      text: "Архивировать",
                      disabled: disabledProducts,
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
                          if (disabledAds) {
                              return;
                          }

                          stopAdsMutate(adsData);

                          // showModal({
                          //     slug: SALESMAN_ADVERTISEMENT_STOP_MODAL,
                          // });
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

                          duplicateAdsMutate(adsData);
                      },
                      text: "Дублировать",
                      disabled: disabledAds,
                  },
                  {
                      onClick: () => {
                          if (disabledAds) {
                              return;
                          }

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
