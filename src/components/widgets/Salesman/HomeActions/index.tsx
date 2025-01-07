"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Input } from "@/components/ui";
import { PlusIcon, SearchIcon } from "@/icons";
import { Action } from "@/components/ui";
import { useModalStore } from "@/store";
import {
    SALESMAN_ADD_ADVERTISEMENT_MODAL,
    SALESMAN_ADD_PRODUCT_MODAL,
} from "@/constants";
import { TSalesmanHomePageType } from "../HomePagesSwitcher";
import { ACTION_CONTENT } from "./constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
}
const HomeActions: FC<Props> = ({ className, homePageType }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleAddProduct: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };
    const handleAddAdvertisements: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_ADD_ADVERTISEMENT_MODAL });
    };

    const actionContent = ACTION_CONTENT(showModal, homePageType);

    return (
        <>
            {homePageType !== "ransoms" && (
                <div className={cn(cls.wrapper, [className])}>
                    <div className={cn(cls.content)}>
                        {/*@ts-ignore*/}
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
                            className={cn(cls.action)}
                            actionBtnText="Действия"
                            actions={actionContent[0]}
                        />
                        <Action
                            className={cn(cls.action)}
                            actionBtnText="Все товары"
                            actions={actionContent[1]}
                        />
                    </div>
                    <Input
                        wrapperCls={cn(cls.inp_wrapper)}
                        icon={<SearchIcon color="var(--grey-200)" />}
                        placeholder="Поиск"
                    />
                </div>
            )}
        </>
    );
};

export { HomeActions };
