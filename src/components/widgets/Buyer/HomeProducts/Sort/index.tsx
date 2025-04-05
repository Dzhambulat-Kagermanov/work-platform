"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import { SortMobile } from "@/components/features/SortMobile";
import { FilterCashback } from "@/components/features/FilterCashback";
import { FilterSort } from "@/components/features/FilterSort";
import { FilterPrice } from "@/components/features/FilterPrice";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Sort: FC<Props> = ({ className }) => {
    const width = useScreen();

    return (
        <>
            {width > SM_MID ? (
                <div className={cn(cls.wrapper, [className])}>
                    <FilterPrice className={cn(cls.btn)} />
                    <FilterCashback className={cn(cls.btn)} />
                    <FilterSort className={cn(cls.btn)} />
                </div>
            ) : (
                <SortMobile />
            )}
        </>
    );
};

export { Sort };
