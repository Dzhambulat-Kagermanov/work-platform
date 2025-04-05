import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { SALESMAN_BURGER_MENU } from "@/constants";
import { useModalBase } from "@/hooks";
import { Logo } from "../../shared/Logo";
import { ExpandArrowIcon } from "@/icons";
import { LinksGroup } from "../Sidebar/LinksGroup";
import cls from "./index.module.scss";
import { TSalesmanHomePageType } from "../HomePagesSwitcher";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
}
const BurgerMenu: FC<Props> = ({ className, homePageType }) => {
    const { modalState, visibleTransition, handleClose } = useModalBase({
        slug: SALESMAN_BURGER_MENU,
    });
    return (
        <>
            {modalState && (
                <section
                    className={cn(cls.wrapper, [className], {
                        [cls.visible]: visibleTransition,
                    })}
                >
                    <div className={cn(cls.head)}>
                        <Logo
                            className={cn(cls.logo)}
                            link="/salesman"
                            onClick={handleClose}
                        />
                        <button
                            className={cn(cls.close_btn)}
                            onClick={handleClose}
                        >
                            <ExpandArrowIcon color="var(--grey-300)" />
                        </button>
                    </div>
                    <LinksGroup
                        homePageType={homePageType}
                        linkOnClick={handleClose}
                        sidebarIsExpand={undefined}
                        className={cn(cls.content)}
                    />
                </section>
            )}
        </>
    );
};

export { BurgerMenu };
