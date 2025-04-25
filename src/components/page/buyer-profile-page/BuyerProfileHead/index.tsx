import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { Avatar } from "./Avatar";
import { Info } from "@/components/entities/ProfileHead/Info";

interface Props extends TClassName {
    id: number;
    name: string;
    rating: number;
    registerDate: string;
    avatar?: string;
}

const BuyerProfileHead: FC<Props> = ({
    className,
    id,
    name,
    rating,
    registerDate,
    avatar,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Avatar
                className={cn(cls.avatar)}
                src={avatar}
            />
            <Info
                className={cn(cls.info)}
                id={id}
                name={name}
                rating={rating}
                registerDate={registerDate}
            />
        </section>
    );
};

export { BuyerProfileHead };
