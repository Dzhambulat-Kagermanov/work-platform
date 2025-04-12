"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { DeliveryChats } from "../DeliveryChats";
import { useScreen } from "@/hooks";
import { MD_LOW } from "@/constants";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";
import { RansomsViewChat } from "../RansomsViewChat";
import { buyerActiveChatSelector, useChat } from "@/store/useChat";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const DeliveryContent: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const activeId = useChat(buyerActiveChatSelector);

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
