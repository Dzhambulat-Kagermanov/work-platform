import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BreadCrumbs } from "@/components/ui";
import { TSalesmanHomePageType } from "../HomePagesSwitcher";
import cls from "./index.module.scss";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
}
const HomeCrumbs: FC<Props> = ({ className, homePageType }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <BreadCrumbs
                className={cn(cls.crumbs)}
                items={[
                    { link: "#", text: "Продвижение" },
                    {
                        link: "#",
                        text: `${
                            homePageType === null
                                ? "Товары"
                                : homePageType === "advertisements"
                                  ? "Объявления"
                                  : "Выкупы"
                        }`,
                    },
                ]}
            />
        </div>
    );
};

export { HomeCrumbs };
