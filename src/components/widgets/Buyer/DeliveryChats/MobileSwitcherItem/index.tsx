import { FC } from "react";
import { TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Link from "next/link";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName, TTag {
    messageQnt: number;
    activeType: ChatStatus;
    type?: ChatStatus;
    children: string;
}
const MobileSwitcherItem: FC<Props> = ({
    className,
    activeType,
    messageQnt,
    type,
    tag = "div",
    children,
}) => {
    const isActive = activeType === type;
    const Tag = tag;

    return (
        <Tag
            className={cn(cls.item, [className], {
                [cls.active]: isActive,
            })}
        >
            <Link
                href={`/buyer/delivery${type ? `?chatType=${type}` : ""}`}
                className={cn(cls.link, [className])}
            >
                <Typography font="Inter-M" size={12} className={cn(cls.text)}>
                    {children}
                </Typography>
                <Typography font="Inter-M" size={12} className={cn(cls.plaque)}>
                    {messageQnt}
                </Typography>
            </Link>
        </Tag>
    );
};

export { MobileSwitcherItem };
