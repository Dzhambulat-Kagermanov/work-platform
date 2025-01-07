import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Link from "next/link";
import { Typography } from "../Typography";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";

export type TBreadCrumbProps = {
    text: string;
    link: string;
};

interface Props extends TClassName {
    items: TBreadCrumbProps[];
    linkCls?: string;
}
const BreadCrumbs: FC<Props> = ({ className, items, linkCls }) => {
    return (
        <nav className={cn(cls.wrapper, [className])}>
            {items.map(({ text, link }, index) => {
                return (
                    <Link
                        className={cn(cls.item, [linkCls])}
                        href={link}
                        key={`${text}${link}`}
                    >
                        <Typography font="Inter-R" size={14}>
                            {text}
                        </Typography>
                        {items.length - 1 > index && (
                            <ExpandArrowIcon
                                className={cn(cls.icon)}
                                color="var(--black-opacity-60)"
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export { BreadCrumbs };
