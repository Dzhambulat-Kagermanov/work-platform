import { FC } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import {
    SupportIcon,
    AccountIcon,
    CreditCardIcon,
    NotificationIcon,
} from "@/icons";
import { cn } from "@/lib";
import { Item } from "../Item";
import { LinksDropdown } from "../LinksDropdown";
import cls from "./index.module.scss";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { ROUTES } from "@/constants";
import { useGetBalanceQuery } from "@/hooks/api/auth";

interface Props extends TClassName {
    sidebarIsExpand?: boolean;
    linkOnClick?: () => void;
    homePageType: TSalesmanHomePageType;
}
const LinksGroup: FC<Props> = ({
    sidebarIsExpand,
    className,
    linkOnClick,
    homePageType,
}) => {
    const { data: balance } = useGetBalanceQuery();

    return (
        <ul className={cn(cls.group, [className])}>
            <LinksDropdown
                homePageType={homePageType}
                linkOnClick={linkOnClick}
                className={cn(cls.dropdown)}
                sidebarIsExpand={sidebarIsExpand}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Поддержка"
                icon={
                    <SupportIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.SUPPORT}
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Профиль"
                icon={
                    <AccountIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.PROFILE}
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Баланс"
                icon={
                    <CreditCardIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.BALANCE.VALUE}
                className={cn(cls.item)}
                additionalInfo={
                    <Typography
                        font="Inter-SB"
                        size={16}
                        className={cn(cls.balance_addition)}
                    >
                        {balance?.accessBalance ?? 0}₽
                    </Typography>
                }
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Тарифы"
                icon={
                    <CreditCardIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.BALANCE.TARIFFS}
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Уведомления"
                icon={
                    <NotificationIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link="/salesman/notification"
                className={cn(cls.item)}
                additionalInfo={
                    <Typography
                        font="Inter-SB"
                        size={16}
                        className={cn(cls.notifications_addition)}
                    >
                        0
                    </Typography>
                }
            />
        </ul>
    );
};

export { LinksGroup };
