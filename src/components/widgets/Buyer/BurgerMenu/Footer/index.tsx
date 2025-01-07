"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Link from "next/link";
import { Typography } from "@/components/ui";
import { ShoppingBagIcon } from "@/icons";
import { FooterUserInfo } from "../FooterUserInfo";
import { usePathValidating } from "@/hooks";
import cls from "./index.module.scss";

interface Props extends TClassName {
    isAuth: boolean;
    actionForLinkClick: () => void;
}
const Footer: FC<Props> = ({ isAuth, className, actionForLinkClick }) => {
    const isSalesmanPage = usePathValidating("/salesman/...");

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Link
                onClick={actionForLinkClick}
                href={isSalesmanPage ? "/buyer/auth" : "/salesman/auth"}
                className={cn(cls.link)}
            >
                <ShoppingBagIcon
                    color="var(--purple-800)"
                    className={cn(cls.icon)}
                />
                <Typography font="Inter-SB" size={16}>
                    {isSalesmanPage
                        ? "Вход для покупателей"
                        : "Вход для продавцов"}
                </Typography>
            </Link>
            {isAuth && (
                <FooterUserInfo
                    image="/images/stub/avatar.png"
                    name="Покупатель №12345"
                    phone="+7 (955) 000-0000"
                    className={cn(cls.user_info)}
                />
            )}
        </div>
    );
};

export { Footer };
