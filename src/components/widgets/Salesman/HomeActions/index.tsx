"use client";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Input } from "@/components/ui";
import { PlusIcon, SearchIcon } from "@/icons";
import { Action } from "@/components/ui";
import { useModalStore, useSellerStore } from "@/store";
import {
    SALESMAN_ADD_ADVERTISEMENT_MODAL,
    SALESMAN_ADD_PRODUCT_MODAL,
} from "@/constants";
import { TSalesmanHomePageType } from "../HomePagesSwitcher";
import { ACTION_CONTENT } from "./constants";
import cls from "./index.module.scss";
import { useDebounce } from "use-debounce";
import {
    adsIdsSelector,
    productIdsSelector,
    setAdsSearchSelector,
    setProductsSearchSelector,
} from "@/store/useSellerStore";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
}
const HomeActions: FC<Props> = ({ className, homePageType }) => {
    const [actionsIsExpand, setActionsIsExpand] = useState<boolean>(false);
    const [productsIsExpand, setProductsIsExpand] = useState<boolean>(false);

    const setProductsSearch = useSellerStore(setProductsSearchSelector);
    const setAdsSearch = useSellerStore(setAdsSearchSelector);

    const productsIds = useSellerStore(productIdsSelector);
    const adsIds = useSellerStore(adsIdsSelector);

    const [search, setSearch] = useState("");
    const [searchDebounce, setSearchDebounce] = useDebounce(search, 600);

    const showModal = useModalStore((state) => state.showModal);
    const handleAddProduct: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };
    const handleAddAdvertisements: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_ADD_ADVERTISEMENT_MODAL });
    };

    const actionContent = ACTION_CONTENT(showModal, homePageType);
    useEffect(() => {
        setSearch("");
        setSearchDebounce("");
    }, [homePageType]);

    useEffect(() => {
        if (homePageType === "advertisements" || homePageType !== "ransoms") {
            if (homePageType === "advertisements") {
                setAdsSearch(searchDebounce);
            } else {
                setProductsSearch(searchDebounce);
            }
        }
    }, [searchDebounce, homePageType]);

    return (
        <>
            {homePageType !== "ransoms" && (
                <div className={cn(cls.wrapper, [className])}>
                    <div className={cn(cls.content)}>
                        <Button
                            onClick={
                                homePageType === null
                                    ? handleAddProduct
                                    : handleAddAdvertisements
                            }
                            size="mid"
                            theme="fill"
                            className={cn(cls.add_btn)}
                            beforeIcon={
                                <PlusIcon
                                    color="var(--white-100)"
                                    className={cn(cls.icon)}
                                />
                            }
                        >
                            Добавить{" "}
                            {homePageType === null ? "товар" : "объявление"}
                        </Button>
                        <Action
                            disabled={
                                (homePageType === "advertisements" &&
                                    !adsIds.length) ||
                                (homePageType === null && !productsIds.length)
                            }
                            className={cn(cls.action)}
                            actionBtnText="Действия"
                            actions={actionContent[0]}
                            expandState={actionsIsExpand}
                            onExpand={() => {
                                setActionsIsExpand((cur) => !cur);
                                setProductsIsExpand(false);
                            }}
                            onClose={() => {
                                setActionsIsExpand(false);
                            }}
                        />
                        <Action
                            className={cn(cls.action)}
                            actionBtnText="Все товары"
                            actions={actionContent[1]}
                            expandState={productsIsExpand}
                            onExpand={() => {
                                setProductsIsExpand((cur) => !cur);
                                setActionsIsExpand(false);
                            }}
                            onClose={() => {
                                setProductsIsExpand(false);
                            }}
                        />
                    </div>
                    <Input
                        wrapperCls={cn(cls.inp_wrapper)}
                        icon={<SearchIcon color="var(--grey-200)" />}
                        placeholder="Поиск"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}
        </>
    );
};

export { HomeActions };
