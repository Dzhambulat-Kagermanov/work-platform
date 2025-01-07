import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Accordion, Typography } from "@/components/ui";
import { FAQs } from "./constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const SupportFAQ: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={36} tag="h2">
                FAQ
            </Typography>
            <Typography font="Inter-R" size={20} tag="h3">
                Получите ответ на популярные вопросы:
            </Typography>
            <div className={cn(cls.accordions)}>
                {FAQs.map(({ subtitle, title }, idx) => {
                    return (
                        <Accordion
                            className={cn(cls.accordion)}
                            defaultState={idx === 0}
                            key={title}
                            title={
                                <Typography font="Inter-SB" size={18} tag="h2">
                                    {title}
                                </Typography>
                            }
                        >
                            <Typography font="Inter-R" size={16} tag="h3">
                                {subtitle}
                            </Typography>
                        </Accordion>
                    );
                })}
            </div>
        </section>
    );
};

export { SupportFAQ };
