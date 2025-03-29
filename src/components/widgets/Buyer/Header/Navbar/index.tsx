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
import { useSessionQuery } from "@/hooks/api/auth";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const Navbar: FC<Props> = ({ className }) => {
    const { data: user } = useSessionQuery();

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
            {user && user.role.slug === "buyer" ? (
                <>
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
                </>
            ) : (
                <></>
            )}
            <ActiveLink
                href={
                    user
                        ? user.role.slug === "buyer"
                            ? ROUTES.BUYER.ACCOUNT.VALUE
                            : ROUTES.SALESMAN.MAIN
                        : ROUTES.BUYER.AUTH
                }
                className={cn(cls.link)}
                activeCls={cn(cls.active_link)}
            >
                <AccountIcon color="white" />
            </ActiveLink>
        </nav>
    );
};

export { Navbar };
