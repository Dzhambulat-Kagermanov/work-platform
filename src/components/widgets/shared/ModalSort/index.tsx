"use client";
import { FC, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase, Typography } from "@/components/ui";
import { SORT_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Item } from "./Item";
import { slugs } from "./constants/slugs";
import cls from "./index.module.scss";
import { FilterModalsLayoutProps } from "@/components/layouts/FilterModals";
import useFiltersStore, {
    categoryPageFiltersSelector,
    categoryPageSetFiltersSelector,
    mainPageFiltersSelector,
    mainPageSetFiltersSelector,
    SortType,
} from "@/store/useFiltersStore";
import { useModalStore } from "@/store";
import { hideModalSelector } from "@/store/useModalStore";

interface Props extends TClassName, Pick<FilterModalsLayoutProps, "pageType"> {}
const ModalSort: FC<Props> = ({ className, pageType }) => {
    const hideModal = useModalStore(hideModalSelector);
    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const setMainPageFilters = useFiltersStore(mainPageSetFiltersSelector);

    const categoryPageFilters = useFiltersStore(categoryPageFiltersSelector);
    const setCategoryPageFilters = useFiltersStore(
        categoryPageSetFiltersSelector,
    );

    const [sortItem, setSortItem] = useState<SortType>("PUBLICATION_DATE");

    useEffect(() => {
        if (pageType === "home") {
            setSortItem(mainPageFilters.sortBy);
        }

        if (pageType === "category") {
            setSortItem(categoryPageFilters.sortBy);
        }
    }, []);

    return (
        <ModalBase
            slug={SORT_MODAL}
            onClose={() => {
                if (pageType === "home") {
                    setMainPageFilters({
                        ...mainPageFilters,
                        sortBy: sortItem,
                    });
                }

                if (pageType === "category") {
                    setCategoryPageFilters({
                        ...categoryPageFilters,
                        sortBy: sortItem,
                    });
                }
            }}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography
                    tag="h2"
                    font="Inter-SB"
                    size={18}
                    className={cn(cls.title)}
                >
                    Сортировка:
                </Typography>
                <ul className={cn(cls.group)}>
                    {slugs.map((slug) => {
                        return (
                            <Item
                                onClick={() => {
                                    hideModal({ slug: SORT_MODAL });
                                }}
                                activeSlug={sortItem}
                                setActiveSlug={setSortItem}
                                key={slug.value}
                                slug={slug}
                                tag="li"
                                className={cn(cls.item)}
                            />
                        );
                    })}
                </ul>
            </div>
        </ModalBase>
    );
};

export { ModalSort };
