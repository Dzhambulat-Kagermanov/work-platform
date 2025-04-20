"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";

import { Order } from "@/types/api";
import { isMobileVersionSelector, useChat } from "@/store/useChat";
import { TRole } from "..";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
    role: TRole;
}
const HeadAreaBackBtn: FC<Props> = ({ setActiveId, className, role }) => {
    const handleClick = () => {
        setActiveId(undefined);
    };

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
