"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { PRODUCTS } from "../constants/products";
import { Item } from "../Item";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
    const [activeId, setActiveId] = useState<number>(PRODUCTS[0].id);

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {PRODUCTS.map(({ id, ...other }) => {
                return (
                    <Item
                        activeId={activeId}
                        setActiveId={setActiveId}
                        id={id}
                        {...other}
                        key={id}
                        className={cn(cls.item)}
                    />
                );
            })}
        </ul>
    );
};

export { Content };
