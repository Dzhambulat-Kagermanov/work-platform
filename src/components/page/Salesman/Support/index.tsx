import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { SupportContent } from "@/components/widgets/Salesman/SupportContent";
import { SupportFAQ } from "@/components/widgets/Salesman/SupportFAQ";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const SupportPage: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.main, [className])}>
            <Typography font="Inter-SB" size={30} tag="h1">
                Поддержка и FAQ
            </Typography>
            <Typography font="Inter-R" size={16} tag="h2">
                Поддержка
            </Typography>
            <SupportContent className={cn(cls.content)} />
            <SupportFAQ className={cn(cls.faq)} />
        </div>
    );
};

export { SupportPage };
