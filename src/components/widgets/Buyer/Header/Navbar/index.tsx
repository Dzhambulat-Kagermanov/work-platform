import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ActiveLink } from "@/components/ui";
import {
    AccountIcon,
    CatalogIcon,
    DeliveryIcon,
    FavoriteIcon,
    HomeIcon,
} from "@/icons";
import cls from "./index.module.scss";
import { isAuth } from "@/constants/stub";

interface Props extends TClassName {}
const Navbar: FC<Props> = ({ className }) => {
    return (
        <nav className={cn(cls.wrapper, [className])}>
            <ActiveLink
                href="/"
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <HomeIcon color="white" />
            </ActiveLink>
            <ActiveLink
                href="/buyer/category"
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <CatalogIcon color="white" />
            </ActiveLink>
            <ActiveLink
                href="/buyer/favorites"
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <FavoriteIcon stroke="white" />
            </ActiveLink>
            <ActiveLink
                href="/buyer/delivery"
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <DeliveryIcon color="white" />
            </ActiveLink>
            <ActiveLink
                href={isAuth ? "/buyer/account" : "/buyer/auth"}
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <AccountIcon color="white" />
            </ActiveLink>
        </nav>
    );
};

export { Navbar };
