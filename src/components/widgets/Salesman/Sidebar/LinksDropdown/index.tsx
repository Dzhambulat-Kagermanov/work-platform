import { FC } from "react";
import { TClassName } from "@/types";
import { Dropdown, Typography } from "@/components/ui";
import { HomeIcon } from "@/icons";
import { cn } from "@/lib";
import { Item } from "../Item";
import cls from "./index.module.scss";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import {
    useGetAdsListQuery,
    useGetSellerProductsQuery,
} from "@/hooks/api/seller";
import { ROUTES } from "@/constants";

interface Props extends TClassName {
    sidebarIsExpand?: boolean;
    linkOnClick?: () => void;
    homePageType: TSalesmanHomePageType;
}
const LinksDropdown: FC<Props> = ({
    className,
    sidebarIsExpand,
    homePageType,
    linkOnClick,
}) => {
    const { data: products } = useGetSellerProductsQuery();
    const { data: ads } = useGetAdsListQuery();
    return (
        <li className={cn(cls.wrapper, [className])}>
            <Dropdown
                isExpandState={true}
                wrapperCls={cn(cls.dropdown_wrapper, [], {
                    [cls.sidebarIsExpand]:
                        sidebarIsExpand || sidebarIsExpand === undefined,
                })}
                placeholder={
                    <Item
                        textOverlayCls={cn(cls.text_overlay)}
                        sidebarIsExpand={sidebarIsExpand}
                        icon={
                            <HomeIcon
                                color="var(--grey-200)"
                                className={cn(cls.icon)}
                            />
                        }
                        text="Продвижение"
                        className={cn(cls.item)}
                    />
                }
                activeItemCls={cn(cls.dropdown_active)}
                contentCls={cn(cls.dropdown_content)}
                itemCls={cn(cls.dropdown_item)}
                isExpandCls={cn(cls.dropdown_isExpand)}
                noCollapseWhenSelect
                noSwitchActiveWhenSelect
                expandType="inline"
                defaultActiveValue="title"
                items={[
                    {
                        content: (
                            <Item
                                slug={null}
                                activeSlug={homePageType}
                                linkOnClick={linkOnClick}
                                sidebarIsExpand={sidebarIsExpand}
                                icon={
                                    <HomeIcon
                                        color="var(--grey-200)"
                                        className={cn(cls.icon)}
                                    />
                                }
                                additionalInfo={
                                    <Typography
                                        font="Inter-SB"
                                        size={16}
                                        className={cn(cls.additional)}
                                    >
                                        {products ? products.total : 0}
                                    </Typography>
                                }
                                link={ROUTES.SALESMAN.MAIN}
                                text="Товары"
                                className={cn(cls.item, [cls.subitem])}
                            />
                        ),
                        value: "Товары",
                    },
                    {
                        content: (
                            <Item
                                slug="advertisements"
                                activeSlug={homePageType}
                                linkOnClick={linkOnClick}
                                sidebarIsExpand={sidebarIsExpand}
                                icon={
                                    <HomeIcon
                                        color="var(--grey-200)"
                                        className={cn(cls.icon)}
                                    />
                                }
                                additionalInfo={
                                    <Typography
                                        font="Inter-SB"
                                        size={16}
                                        className={cn(cls.additional)}
                                    >
                                        {ads?.total ?? 0}
                                    </Typography>
                                }
                                link={ROUTES.SALESMAN.MAIN}
                                text="Объявления"
                                className={cn(cls.item, [cls.subitem])}
                            />
                        ),
                        value: "Объявления",
                    },
                    {
                        content: (
                            <Item
                                slug="ransoms"
                                activeSlug={homePageType}
                                linkOnClick={linkOnClick}
                                sidebarIsExpand={sidebarIsExpand}
                                icon={
                                    <HomeIcon
                                        color="var(--grey-200)"
                                        className={cn(cls.icon)}
                                    />
                                }
                                link={ROUTES.SALESMAN.MAIN}
                                text="Выкупы"
                                className={cn(cls.item, [cls.subitem])}
                            />
                        ),
                        value: "Выкупы",
                    },
                ]}
            />
        </li>
    );
};

export { LinksDropdown };
