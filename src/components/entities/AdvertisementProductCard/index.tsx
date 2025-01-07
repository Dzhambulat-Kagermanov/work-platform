import { FC } from "react";
import { TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName, TTag {
    image: string;
    name: string;
    number: string;
    owner: string;
}
const AdvertisementProductCard: FC<Props> = ({
    className,
    image,
    name,
    number,
    owner,
    tag = "div",
}) => {
    const Tag = tag;
    return (
        <Tag className={cn(cls.item, [className])}>
            <Image src={image} width={60} height={76} alt="Товар" />
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={16} tag="h2">
                    {name}
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    <span>{number}</span> / {owner}
                </Typography>
            </div>
        </Tag>
    );
};

export { AdvertisementProductCard };
