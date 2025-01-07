import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { Button } from "./Button";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const SupportContent: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.images)}>
                <Image
                    src={"/images/salesman/support/avatar-1.png"}
                    alt="Аватар"
                    width={48}
                    height={48}
                />
                <div className={cn(cls.border)}>
                    <Image
                        src={"/images/salesman/support/avatar-2.png"}
                        alt="Аватар"
                        width={56}
                        height={56}
                    />
                </div>
                <Image
                    src={"/images/salesman/support/avatar-3.png"}
                    alt="Аватар"
                    width={48}
                    height={48}
                />
            </div>
            <Typography font="Inter-M" size={20} tag="h2">
                Появились вопросы?
            </Typography>
            <Typography font="Inter-R" size={18} tag="h3">
                Посмотрите популярные вопросы в FAQ или вяжитесь с нами в
                Telegram и мы оперативно поможем решить вашу проблему!
            </Typography>
            <Button className={cn(cls.btn)} />
        </section>
    );
};

export { SupportContent };
