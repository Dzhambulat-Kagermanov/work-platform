import { FC, useState } from "react";
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

interface Props extends TClassName {
    chatType: ChatStatus;
}
const RansomsContent: FC<Props> = ({ className, chatType }) => {
    const [activeId, setActiveId] = useState<number | undefined>(undefined);

    const width = useScreen();
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

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
                <RansomsChats
                    chatType={chatType}
                    className={cn(cls.chat)}
                    activeIdSTUB={activeId}
                    setActiveIdSTUB={setActiveId}
                />
            )}
            {IS_RENDER_RANSOMS_VIEW_CHAT && (
                <RansomsViewChat
                    className={cn(cls.view)}
                    activeId={activeId}
                    setActiveSTUB={setActiveId}
                />
            )}
        </section>
    );
};

export { RansomsContent };
