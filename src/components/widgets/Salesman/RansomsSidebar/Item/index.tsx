import { FC } from "react";
import { TClassName } from "@/types";
import Link from "next/link";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { FolderIcon } from "@/icons";
import { TChatType } from "../types";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    messageQnt: number;
    type?: ChatStatus;
    activeType?: ChatStatus;
    children: string;
}
const Item: FC<Props> = ({
    children,
    messageQnt,
    type,
    className,
    activeType,
}) => {
    const isActive = activeType === type;

    return (
        <Link
            href={`/salesman?homePageType=ransoms${type ? `&chatType=${type}` : ""}`}
            className={cn(cls.link, [className])}
        >
            <div className={cn(cls.folder)}>
                <Typography font="Inter-M" size={12} className={cn(cls.plaque)}>
                    {messageQnt}
                </Typography>
                <FolderIcon
                    className={cn(cls.icon)}
                    color={isActive ? "var(--purple-800)" : "var(--white-100)"}
                    stroke="var(--purple-600)"
                />
            </div>
            <Typography font="Inter-M" size={10} className={cn(cls.text)}>
                {children}
            </Typography>
        </Link>
    );
};

export { Item };
