"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { useModalStore, useScreen } from "@/hooks";
import { LG_LOW, MD_LOW, SALESMAN_SIDEBAR_MENU } from "@/constants";
import { Order } from "@/types/api";
import {
    isMobileVersionSelector,
    setIsMobileVersionSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
}
const HeadAreaBackBtn: FC<Props> = ({ setActiveId, className }) => {
    const width = useScreen();
    const handleClick = () => {
        setActiveId(undefined);
    };
    const setIsMobileVersion = useChat(setIsMobileVersionSelector);
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    useEffect(() => {
        if ((sidebarState && width <= LG_LOW) || width <= MD_LOW) {
            setIsMobileVersion(true);
        } else {
            setIsMobileVersion(false);
        }
    }, [width]);

    const isMobileVersion = useChat(isMobileVersionSelector);

    return (
        <>
            {isMobileVersion && (
                <button
                    className={cn(cls.btn, [className])}
                    onClick={handleClick}
                >
                    <ExpandArrowIcon color="var(--black-200-opacity-50)" />
                </button>
            )}
        </>
    );
};

export { HeadAreaBackBtn };
