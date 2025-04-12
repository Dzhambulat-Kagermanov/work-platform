"use client";
import { FC } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { useModalStore, useScreen } from "@/hooks";
import {
    LG_LOW,
    MD_BIG_BETWEEN_MD_LOW,
    SALESMAN_SIDEBAR_MENU,
} from "@/constants";
import { Order } from "@/types/api";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
}
const HeadAreaBackBtn: FC<Props> = ({ setActiveId, className }) => {
    const width = useScreen();
    const handleClick = () => {
        setActiveId(undefined);
    };
    const sidebarState = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );
    return (
        <>
            {((sidebarState && width <= LG_LOW) ||
                width <= MD_BIG_BETWEEN_MD_LOW) && (
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
