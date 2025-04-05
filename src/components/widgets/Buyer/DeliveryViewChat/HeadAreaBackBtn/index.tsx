import { FC } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { MD_LOW } from "@/constants";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
}
const HeadAreaBackBtn: FC<Props> = ({ setActiveSTUB, className }) => {
    const width = useScreen();
    const handleClick = () => {
        setActiveSTUB(undefined);
    };
    return (
        <>
            {width <= MD_LOW && (
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
