"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";
import { TChatType } from "./types";
import { useModalStore, useScreen } from "@/hooks";
import {
    LG_LOW,
    MD_BIG_BETWEEN_MD_LOW,
    SALESMAN_SIDEBAR_MENU,
} from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    chatType?: TChatType;
}
const RansomsSidebar: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    const IS_MENU_RENDER =
        (!sidebarState && width > MD_BIG_BETWEEN_MD_LOW) || width > LG_LOW;

    return (
        <>
            {IS_MENU_RENDER && (
                <aside className={cn(cls.wrapper, [className])}>
                    <div className={cn(cls.overlay)}>
                        <div className={cn(cls.nav_wrapper)}>
                            <nav className={cn(cls.nav)}>
                                <Item
                                    messageQnt={10}
                                    type={undefined}
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Все чаты
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="waitingOrder"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Ожидание заказа
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="waitingReceive"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Ожидание получения товара
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="confirmation"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Подтверждение
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="cashbackReceived"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Кэшбек получен
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="canceled"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Отменен
                                </Item>
                                <Item
                                    messageQnt={10}
                                    type="archive"
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                    Архив
                                </Item>
                            </nav>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
};

export { RansomsSidebar };
