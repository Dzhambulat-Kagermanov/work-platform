"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { DeliveryChats } from "../DeliveryChats";
import { useScreen } from "@/hooks";
import { LG_LOW, MD_BIG_BETWEEN_MD_LOW, MD_LOW } from "@/constants";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";
import { RansomsViewChat } from "../RansomsViewChat";
import {
    buyerActiveChatSelector,
    setIsMobileVersionSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const DeliveryContent: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const activeId = useChat(buyerActiveChatSelector);

    const setIsMobileVersion = useChat(setIsMobileVersionSelector);

    useEffect(() => {
        if (width <= MD_LOW) {
            setIsMobileVersion(true);
        } else {
            setIsMobileVersion(false);
        }
    }, [width]);

    return (
        <section className={cn(cls.wrapper, [className])}>
            {((width <= MD_LOW && activeId === undefined) ||
                width > MD_LOW) && (
                <DeliveryChats chatType={chatType} className={cn(cls.chats)} />
            )}
            {((width <= MD_LOW && activeId !== undefined) ||
                width > MD_LOW) && <RansomsViewChat className={cn(cls.view)} />}
        </section>
    );
};

export { DeliveryContent };
