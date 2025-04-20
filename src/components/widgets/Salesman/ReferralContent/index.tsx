"use client";
import { FC, MouseEventHandler, useEffect } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { profileSelector, useProfile } from "@/store/useProfile";
import { useReferralLink } from "@/hooks/api/seller/useReferralLink";

interface Props extends TClassName {}

const ReferralContent: FC<Props> = ({ className }) => {
    const profile = useProfile(profileSelector);
    const handleCopy: MouseEventHandler = () => {
        navigator.clipboard.writeText("https://wbdiscount.pro/seller/balance");
    };

    const referralLink = useReferralLink();

    useEffect(() => {
        if (profile?.id) referralLink.mutate(profile.id);
    }, []);

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                Специально для вас мы создали партнерскую программу, по которой
                вы сможете зарабатывать не зависимо от собственных продвижений.
            </Typography>
            <div className={cls.link_wrapper}>
                <Typography
                    font="Inter-R"
                    tag="p"
                    size={14}
                    className={cls.text}
                >
                    Копируйте вашу индивидуальную ссылку:
                </Typography>
                <div className={cls.link}>
                    <Typography font="Inter-M" tag="p" size={14}>
                        https://wbdiscount.pro/seller/balance
                    </Typography>
                    <button className={cn(cls.btn)} onClick={handleCopy}>
                        <CopyIcon
                            className={cn(cls.icon)}
                            color="var(--grey-600)"
                        />
                    </button>
                </div>
            </div>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                Отправляйте другу, получайте 10% от всех его платежей и выводите
                отчисления по партнерской програмне от 10000Р.
            </Typography>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                А если вы являетесь веб специалистом или медийной личностью, то
                для вас есть особые условия.
            </Typography>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                <Link href="#">Напишите нам</Link> и узнайте все подробности.
            </Typography>
        </section>
    );
};

export { ReferralContent };
