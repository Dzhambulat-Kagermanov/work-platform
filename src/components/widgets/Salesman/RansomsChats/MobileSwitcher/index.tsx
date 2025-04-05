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
import { useGetChatStatusesQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const MobileSwitcher: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const { data: chatStatuses, isLoading } = useGetChatStatusesQuery();

    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    const IS_SWITCHER_RENDER =
        (sidebarState && width <= LG_LOW) || width <= MD_BIG_BETWEEN_MD_LOW;

    if (isLoading || !chatStatuses || !chatStatuses.length) {
        return <></>;
    }
    return (
        <>
            {IS_SWITCHER_RENDER && (
                <div className={cn(cls.wrapper, [className])}>
                    <ul className={cn(cls.switcher)}>
                        {chatStatuses.map((item, index) => (
                            <MobileSwitcherItem
                                key={index}
                                messageQnt={item.not_read}
                                type={item.slug}
                                className={cn(cls.item)}
                                activeType={chatType}
                            >
                                {item.title}
                            </MobileSwitcherItem>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export { MobileSwitcher };
