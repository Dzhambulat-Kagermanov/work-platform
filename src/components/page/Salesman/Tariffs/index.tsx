import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { TariffsCrumbs } from "@/components/widgets/Salesman/TariffsCrumbs";
import { TariffsContent } from "@/components/widgets/Salesman/TariffsContent";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const TariffsPage: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.main, [className])}>
            <TariffsCrumbs className={cn(cls.crumbs)} />
            <TariffsContent className={cn(cls.content)} />
        </div>
    );
};

export { TariffsPage };
