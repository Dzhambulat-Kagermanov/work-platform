import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BreadCrumbs, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const TariffsCrumbs: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={30} tag="h1">
                Тарифы
            </Typography>
            <BreadCrumbs
                className={cn(cls.crumbs)}
                items={[
                    { link: "#", text: "Баланс" },
                    { link: "#", text: "Тарифы" },
                ]}
            />
        </section>
    );
};

export { TariffsCrumbs };
