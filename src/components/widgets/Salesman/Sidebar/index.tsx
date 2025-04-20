"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Logo } from "../../shared/Logo";
import { ExpandArrowIcon } from "@/icons";
import { LinksGroup } from "./LinksGroup";
import { UserInfo } from "./UserInfo";
import { TSalesmanHomePageType } from "../HomePagesSwitcher";
import { useModalStore } from "@/store";
import { ROUTES, SALESMAN_SIDEBAR_MENU } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
}
const Sidebar: FC<Props> = ({ className, homePageType }) => {
    const isExpand = useModalStore(
        (state) => state.modalsStates[SALESMAN_SIDEBAR_MENU]?.modalState,
    );

    const setIsExpand = useModalStore((state) => state.toggleModal);

    const handleExpand: MouseEventHandler = () => {
        setIsExpand({ slug: SALESMAN_SIDEBAR_MENU });
    };

    return (
        <aside
            className={cn(cls.wrapper, [className], {
                [cls.isExpand]: isExpand,
            })}
        >
            <div className={cn(cls.content)}>
                <Logo className={cn(cls.logo)} link={ROUTES.MAIN} />
                <LinksGroup
                    sidebarIsExpand={!!isExpand}
                    className={cn(cls.group)}
                    homePageType={homePageType}
                    collapseSidebar={handleExpand}
                />
                <UserInfo
                    className={cn(cls.info)}
                    sidebarIsExpand={!!isExpand}
                />
            </div>

            <button onClick={handleExpand} className={cn(cls.expand_btn)}>
                <ExpandArrowIcon color="var(--grey-300)" />
            </button>
        </aside>
    );
};

export { Sidebar };
