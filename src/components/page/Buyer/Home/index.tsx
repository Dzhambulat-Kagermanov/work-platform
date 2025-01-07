import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { HomePromo } from "@/components/widgets/Buyer/HomePromo";
import { HomeProducts } from "@/components/widgets/Buyer/HomeProducts";
import { FilterModalsLayout } from "@/components/layouts/FilterModals";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
    return (
        <main className={cn(cls.home, [className])}>
            <HomePromo
                className={cn("modules-gap-top", ["modules-gap-bottom"])}
            />
            <HomeProducts className={cn("modules-gap-bottom")} />
            <FilterModalsLayout />
        </main>
    );
};

export { HomePage };
