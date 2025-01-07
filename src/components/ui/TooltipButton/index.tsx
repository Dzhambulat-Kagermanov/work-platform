import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { HelpIcon } from "@/icons";

interface Props extends TClassName {
    tooltip: string;
}
const TooltipButton: FC<Props> = ({ tooltip, className }) => {
    return (
        <button className={cn(cls.tooltip, [className])} title={tooltip}>
            <HelpIcon color="var(--purple-800)" />
        </button>
    );
};

export { TooltipButton };
