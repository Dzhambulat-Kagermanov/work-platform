import { TActionItemProps } from "@/components/ui/Action";
import { ROUTES, SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from "@/constants";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { useSellerStore } from "@/store";
import { adsIdsSelector, productIdsSelector } from "@/store/useSellerStore";
import {
    useDuplicateAdsMutation,
    useStopAdsMutation,
    useStopProductsMutation,
} from "@/hooks/api/seller";
import useArchiveProductsMutation from "@/hooks/api/seller/useArchiveProductsMutation";
import { useRouter } from "next/navigation";
import {
    setFilterAdsQuerySelector,
    setFilterProductsQuerySelector,
    useSalesmanActionsFilter,
} from "@/store/useSalesmanActionsFilter";

export const ACTION_CONTENT: (
    showModal: (param: { slug: string }) => void,
    homePageType: TSalesmanHomePageType,
) => TActionItemProps[][] = (showModal, homePageType) => {
    const selectedProducts = useSellerStore(productIdsSelector);
    const selectedAds = useSellerStore(adsIdsSelector);
    const router = useRouter();
    const setFilterProductsQuery = useSalesmanActionsFilter(
        setFilterProductsQuerySelector,
    );
    const setFilterAdsQuery = useSalesmanActionsFilter(
        setFilterAdsQuerySelector,
    );

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
        ad_ids: selectedAds.map((el) => el.adsId),
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
                      onClick: () => {
                          setFilterProductsQuery("all");
                      },
                      text: "Все товары",
                  },
                  {
                      onClick: () => {
                          setFilterProductsQuery("active");
                      },
                      text: "Активные",
                  },
                  {
                      onClick: () => {
                          setFilterProductsQuery("stop");
                      },
                      text: "Остановленные",
                  },
                  {
                      onClick: () => {
                          setFilterProductsQuery("archive");
                      },
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
                  {
                      onClick: () => {
                          if (selectedAds.length > 1) {
                              return;
                          }

                          router.push(
                              `${ROUTES.SALESMAN.EDIT_ADVERTISEMENTS}?selectedWbItem=${selectedAds[0].productId}&editAdv=${selectedAds[0].adsId}`,
                          );
                      },
                      text: "Редактировать",
                      disabled: selectedAds.length > 1,
                  },
              ],
              [
                  {
                      onClick: () => {
                          setFilterAdsQuery("all");
                      },
                      text: "Все объявления",
                  },
                  {
                      onClick: () => {
                          setFilterAdsQuery("active");
                      },
                      text: "Активные",
                  },
                  {
                      onClick: () => {
                          setFilterAdsQuery("stop");
                      },
                      text: "Остановленные",
                  },
                  {
                      onClick: () => {
                          setFilterAdsQuery("archive");
                      },
                      text: "Архивированные",
                  },
              ],
          ];
};
