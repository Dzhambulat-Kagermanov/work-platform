import { SortType } from "@/store/useFiltersStore";

export type SlugSelectItem = {
    label: string;
    value: SortType;
};

export const slugs: SlugSelectItem[] = [
    {
        label: "По дате публикации",
        value: "PUBLICATION_DATE",
    },
    {
        label: "Цена по убыванию",
        value: "PRICE_DESC",
    },
    {
        label: "По рейтингу товара",
        value: "PRODUCT_RATING",
    },
    {
        label: "По рейтингу продавца",
        value: "SELLER_RATING",
    },
    {
        label: "По размеру кэшбека",
        value: "CASHBACK_AMOUNT",
    },
    {
        label: "Популярнее (по кол-ву выкупов)",
        value: "POPULAR",
    },
];
