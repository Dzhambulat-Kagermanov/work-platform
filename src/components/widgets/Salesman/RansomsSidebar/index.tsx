"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";
import { useModalStore, useScreen } from "@/hooks";
import {
    LG_LOW,
    MD_BIG_BETWEEN_MD_LOW,
    SALESMAN_SIDEBAR_MENU,
} from "@/constants";
import cls from "./index.module.scss";
import { useGetChatStatusesQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    chatType?: ChatStatus;
}
const RansomsSidebar: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const { data: chatStatuses, isLoading } = useGetChatStatusesQuery();
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    const IS_MENU_RENDER =
        (!sidebarState && width > MD_BIG_BETWEEN_MD_LOW) || width > LG_LOW;

    if (isLoading || !chatStatuses || !chatStatuses.length) {
        return <></>;
    }

    return (
        <>
            {IS_MENU_RENDER && (
                <aside className={cn(cls.wrapper, [className])}>
                    <div className={cn(cls.overlay)}>
                        <div className={cn(cls.nav_wrapper)}>
                            <nav className={cn(cls.nav)}>
                                {chatStatuses.map((item, index) => (
                                    <Item
                                        key={index}
                                        messageQnt={item.not_read}
                                        type={item.slug}
                                        className={cn(cls.item)}
                                        activeType={chatType}
                                    >
                                        {item.title}
                                    </Item>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
};

export { RansomsSidebar };
