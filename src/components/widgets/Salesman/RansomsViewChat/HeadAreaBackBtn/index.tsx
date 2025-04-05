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

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
}
const HeadAreaBackBtn: FC<Props> = ({ setActiveSTUB, className }) => {
    const width = useScreen();
    const handleClick = () => {
        setActiveSTUB(undefined);
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
