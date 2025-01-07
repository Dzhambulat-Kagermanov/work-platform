"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { MobileSwitcherItem } from "../MobileSwitcherItem";
import { TChatType } from "../../RansomsSidebar/types";
import { useModalStore, useScreen } from "@/hooks";
import {
    LG_LOW,
    MD_BIG_BETWEEN_MD_LOW,
    SALESMAN_SIDEBAR_MENU,
} from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    chatType: TChatType;
}
const MobileSwitcher: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    const IS_SWITCHER_RENDER =
        (sidebarState && width <= LG_LOW) || width <= MD_BIG_BETWEEN_MD_LOW;

    return (
        <>
            {IS_SWITCHER_RENDER && (
                <div className={cn(cls.wrapper, [className])}>
                    <ul className={cn(cls.switcher)}>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type={undefined}
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Все чаты
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="waitingOrder"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Ожидание заказа
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="waitingReceive"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Ожидание получения товара
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="confirmation"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Подтверждение
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="cashbackReceived"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Кэшбек получен
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="canceled"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Отменен
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="archive"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Архив
                        </MobileSwitcherItem>
                    </ul>
                </div>
            )}
        </>
    );
};

export { MobileSwitcher };
