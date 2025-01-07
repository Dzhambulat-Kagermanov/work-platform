"use client";
import { FC, useState } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { SwitcherActions } from "../SwitcherActions";
import { SwitcherContent } from "../SwitcherContent";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import cls from "./index.module.scss";

export type TContentType = "conditions" | "description" | "reviews";

interface Props
    extends TClassName,
        Pick<TProductItemProps, "id" | "productDescription" | "salesmanId"> {}
const Switcher: FC<Props> = ({
    id,
    productDescription,
    className,
    salesmanId,
}) => {
    const width = useScreen();
    const [contentType, setContentType] = useState<TContentType>("conditions");

    return (
        <section className={cn(cls.wrapper, [className])}>
            {width > SM_MID && (
                <SwitcherActions
                    className={cn(cls.actions)}
                    contentType={contentType}
                    setContentType={setContentType}
                />
            )}
            <SwitcherContent
                salesmanId={salesmanId}
                contentType={contentType}
                id={id}
                productDescription={productDescription}
                className={cn(cls.content)}
            />
        </section>
    );
};

export { Switcher };
