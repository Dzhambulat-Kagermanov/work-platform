"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { RansomsChats } from "../RansomsChats";
import { RansomsViewChat } from "../RansomsViewChat";
import { useModalStore, useScreen } from "@/hooks";
import {
    LG_LOW,
    MD_BIG_BETWEEN_MD_LOW,
    SALESMAN_SIDEBAR_MENU,
} from "@/constants";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";
import {
    salesmanActiveChatSelector,
    setIsMobileVersionSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const RansomsContent: FC<Props> = ({ className, chatType }) => {
    const activeId = useChat(salesmanActiveChatSelector);

    const width = useScreen();
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );
    const setIsMobileVersion = useChat(setIsMobileVersionSelector);

    useEffect(() => {
        if (
            (sidebarState && width <= LG_LOW) ||
            width <= MD_BIG_BETWEEN_MD_LOW
        ) {
            setIsMobileVersion(true);
        } else {
            setIsMobileVersion(false);
        }
    }, [width, sidebarState]);

    const IS_RENDER_RANSOMS_CHAT =
        ((sidebarState && activeId === undefined) ||
            width <= MD_BIG_BETWEEN_MD_LOW ||
            width > LG_LOW ||
            !sidebarState) &&
        ((width <= MD_BIG_BETWEEN_MD_LOW && activeId === undefined) ||
            width > MD_BIG_BETWEEN_MD_LOW);

    const IS_RENDER_RANSOMS_VIEW_CHAT =
        ((sidebarState && activeId !== undefined) ||
            width <= MD_BIG_BETWEEN_MD_LOW ||
            width > LG_LOW ||
            !sidebarState) &&
        ((width <= MD_BIG_BETWEEN_MD_LOW && activeId !== undefined) ||
            width > MD_BIG_BETWEEN_MD_LOW);

    return (
        <section className={cn(cls.wrapper, [className, "w-full"])}>
            {IS_RENDER_RANSOMS_CHAT && (
                <RansomsChats chatType={chatType} className={cn(cls.chat)} />
            )}
            {IS_RENDER_RANSOMS_VIEW_CHAT && (
                <RansomsViewChat className={cn(cls.view)} />
            )}
        </section>
    );
};

export { RansomsContent };
