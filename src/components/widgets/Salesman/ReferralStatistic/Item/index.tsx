import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";

interface Props extends TClassName, TTag {
    title: string;
    number: number;
}

const Item: FC<Props> = ({ className, tag: Tag = "div", number, title }) => {
    return (
        <Tag className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" tag="h2" size={12} className={cls.title}>
                {title}
            </Typography>{" "}
            <Typography
                font="Inter-R"
                tag="h2"
                size={24}
                className={cls.number}
            >
                {number}
            </Typography>
        </Tag>
    );
};

export { Item };
