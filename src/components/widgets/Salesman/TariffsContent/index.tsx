"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { TariffsItem } from "@/components/entities/TariffsItem";
import cls from "./index.module.scss";
import { useGetTariffsListQuery } from "@/hooks/api/tariffs";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TClassName {}
const TariffsContent: FC<Props> = ({ className }) => {
    const { data: tariffs, isLoading } = useGetTariffsListQuery();

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            {tariffs && tariffs.length ? (
                <>
                    <Typography font="Inter-R" size={16} tag="h2">
                        Приобретайте тарифы с выгодой до 20%
                    </Typography>
                    <div className={cn(cls.tariffs_wrapper)}>
                        <ul className={cn(cls.tariffs)}>
                            {tariffs.map((item, index) => {
                                return (
                                    <TariffsItem
                                        tariff={item}
                                        key={index}
                                        className={cn(cls.item)}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export { TariffsContent };
