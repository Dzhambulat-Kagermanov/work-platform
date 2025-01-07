"use client";
import { FC, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { DeliveryChats } from "../DeliveryChats";
import { DeliveryViewChat } from "../DeliveryViewChat";
import { useScreen } from "@/hooks";
import { MD_LOW } from "@/constants";
import { CHATS } from "../DeliveryChats/constants/chats";
import cls from "./index.module.scss";
import { TChatType } from "../DeliverySidebar/types";

interface Props extends TClassName {
    chatType: TChatType;
}
const DeliveryContent: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    const [activeId, setActiveId] = useState<number | undefined>(undefined);
    useEffect(() => {
        if (activeId === undefined) width > MD_LOW && setActiveId(CHATS[0].id);
    }, [width]);

    return (
        <section className={cn(cls.wrapper, [className])}>
            {((width <= MD_LOW && activeId === undefined) ||
                width > MD_LOW) && (
                <DeliveryChats
                    chatType={chatType}
                    className={cn(cls.chats)}
                    activeIdSTUB={activeId}
                    setActiveIdSTUB={setActiveId}
                />
            )}
            {((width <= MD_LOW && activeId !== undefined) ||
                width > MD_LOW) && (
                <DeliveryViewChat
                    className={cn(cls.view)}
                    setActiveSTUB={setActiveId}
                />
            )}
        </section>
    );
};

export { DeliveryContent };
