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
import { useSessionQuery } from "@/hooks/api/auth";

interface Props extends TClassName {
    actionForLinkClick: () => void;
}
const Footer: FC<Props> = ({ className, actionForLinkClick }) => {

    const { data: user } = useSessionQuery();

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
            {user ?(
                <FooterUserInfo
                    image={user.avatar ?? ""}
                    name={user.name}
                    phone={user.phone}
                    className={cn(cls.user_info)}
                />
            ) : <></>}
        </div>
    );
};

export { Footer };
