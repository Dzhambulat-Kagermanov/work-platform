"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { MobileSwitcherItem } from "../MobileSwitcherItem";
import { TChatType } from "../../DeliverySidebar/types";
import { useScreen } from "@/hooks";
import { XS_BIG } from "@/constants";
import cls from "./index.module.scss";
import { useGetChatStatusesQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const MobileSwitcher: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();

    const { data: chatStatuses, isLoading } = useGetChatStatusesQuery();

    if (isLoading || !chatStatuses || !chatStatuses.length) {
        return <></>
    }

    return (
        <>
            {width <= XS_BIG && (
                <div className={cn(cls.wrapper, [className])}>
                    <ul className={cn(cls.switcher)}>
                        {
                            chatStatuses.map((item, index) => (
                                <MobileSwitcherItem
                                    key={index}
                                    messageQnt={item.not_read}
                                    type={item.slug}
                                    className={cn(cls.item)}
                                    activeType={chatType}
                                >
                                   {item.title}
                                </MobileSwitcherItem>
                            ))
                        }
                    </ul>
                </div>
            )}
        </>
    );
};

export { MobileSwitcher };
