import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const Navbar: FC<Props> = ({ className }) => {
    return (
        <nav className={cn(cls.navbar, [className])}>
            <div className={cn(cls.row)}>
                <Typography
                    className={cn(cls.title)}
                    font="Inter-B"
                    size={16}
                    tag="h3"
                >
                    Покупателям
                </Typography>
                <div className={cn(cls.content)}>
                    <Link href={ROUTES.MAIN}>
                        <Typography font="Inter-R" size={14}>
                            Главная
                        </Typography>
                    </Link>
                    <Link href={ROUTES.BUYER.CATEGORY}>
                        <Typography font="Inter-R" size={14}>
                            Категории
                        </Typography>
                    </Link>
                    <Link href={ROUTES.BUYER.AUTH}>
                        <Typography font="Inter-R" size={14}>
                            Вход
                        </Typography>
                    </Link>
                </div>
            </div>
            <div className={cn(cls.row)}>
                <Typography
                    className={cn(cls.title)}
                    font="Inter-B"
                    size={16}
                    tag="h3"
                >
                    Продавцам
                </Typography>
                <div className={cn(cls.content)}>
                    <Link href={ROUTES.SALESMAN.AUTH}>
                        <Typography font="Inter-R" size={14}>
                            Вход
                        </Typography>
                    </Link>
                    <Link href={ROUTES.SALESMAN.SUPPORT}>
                        <Typography font="Inter-R" size={14}>
                            Поддержка
                        </Typography>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
