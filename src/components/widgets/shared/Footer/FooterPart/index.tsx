"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Link from "next/link";
import { useScreen } from "@/hooks";
import { ROUTES, SM_BIG, XS_BIG } from "@/constants";
import { Social } from "../Social";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const FooterPart: FC<Props> = ({ className }) => {
    const width = useScreen();

    return (
        <div className={cn(cls.wrapper, [className])}>
            {width > SM_BIG && (
                <Typography font="Inter-R" size={14} tag="h6">
                    WBDiscount.pro l Все права защищены © 2024
                </Typography>
            )}
            {width <= XS_BIG && (
                <>
                    <Typography font="Inter-R" size={14} tag="h5">
                        ООО “Маркет Ревью” <br />
                        ИНН 9722092663
                    </Typography>
                    <Social className={cn(cls.social)} />
                </>
            )}
            <div className={cn(cls.content)}>
                <Link
                    href={ROUTES.USER_CONDITIONS}
                    className={cn(cls.agreement)}
                >
                    <Typography font="Inter-R" size={14} tag="span">
                        Пользовательское соглашение
                    </Typography>
                </Link>
                <Link href={ROUTES.POLICY} className={cn(cls.policy)}>
                    <Typography font="Inter-R" size={14} tag="span">
                        Политика конфидициальности
                    </Typography>
                </Link>
            </div>
        </div>
    );
};

export { FooterPart };
