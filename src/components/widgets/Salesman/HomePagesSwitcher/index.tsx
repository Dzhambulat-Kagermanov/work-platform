"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";
import { useSearchParams } from "next/navigation";
import cls from "./index.module.scss";
import { useGetSellerProductsQuery } from "@/hooks/api/seller";
import { useSellerStore } from "@/store";
import {
    setProductsSearchSelector,
    setAdsSearchSelector,
} from "@/store/useSellerStore";

export type TSalesmanHomePageType = "advertisements" | "ransoms" | null;

interface Props extends TClassName {}
const HomePagesSwitcher: FC<Props> = ({ className }) => {
    const queryParams = useSearchParams();
    const activeSlug = queryParams.get("homePageType") as TSalesmanHomePageType;

    const { data: products } = useGetSellerProductsQuery([]);

    const setProductsSearch = useSellerStore(setProductsSearchSelector);
    const setAdsSearch = useSellerStore(setAdsSearchSelector);

    const handleSwitch = () => {
        setAdsSearch("");
        setProductsSearch("");
    };

    return (
        <nav className={cn(cls.wrapper, [className])}>
            <Item
                slug={null}
                selectedProducts={1}
                className={cn(cls.item)}
                activeSlug={activeSlug}
                text={`Товары (${products ? products.total : 0})`}
                onClick={handleSwitch}
            />
            <Item
                selectedProducts={0}
                className={cn(cls.item)}
                activeSlug={activeSlug}
                slug="advertisements"
                text="Объявления"
                onClick={handleSwitch}
            />
            <Item
                selectedProducts={0}
                className={cn(cls.item)}
                activeSlug={activeSlug}
                slug="ransoms"
                text="Выкупы"
                onClick={handleSwitch}
            />
        </nav>
    );
};

export { HomePagesSwitcher };
