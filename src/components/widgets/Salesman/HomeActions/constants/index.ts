import { TActionItemProps } from "@/components/ui/Action";
import {
    SALESMAN_ADVERTISEMENT_STOP_MODAL,
    SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL,
} from "@/constants";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";

export const ACTION_CONTENT: (
    showModal: (param: { slug: string }) => void,
    homePageType: TSalesmanHomePageType,
) => TActionItemProps[][] = (showModal, homePageType) => {
    return homePageType === null
        ? [
              [
                  {
                      onClick: () => {},
                      text: "Остановить",
                  },
                  {
                      onClick: () => {},
                      text: "Архивировать",
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
                  },
                //   {
                //       onClick: () => {},
                //       text: "Редактировать",
                //   },
                  {
                      onClick: () => {},
                      text: "Дублировать",
                  },
                  {
                      onClick: () => {
                          showModal({
                              slug: SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL,
                          });
                      },
                      text: "Архивировать",
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
