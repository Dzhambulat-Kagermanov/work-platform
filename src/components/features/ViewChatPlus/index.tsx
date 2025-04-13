import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { PlusIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ViewChatPlus: FC<Props> = ({ className }) => {
    return (
        <button type="button" className={cn(cls.btn, [className])}>
            <PlusIcon className={cn(cls.icon)} color="var(--purple-300)" />
        </button>
    );
};

export { ViewChatPlus };
