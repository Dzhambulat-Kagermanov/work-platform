"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BreadCrumbs, Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { profileSelector, useProfile } from "@/store/useProfile";

interface Props extends TClassName {}
const ReferralCrumbs: FC<Props> = ({ className }) => {
    const profile = useProfile(profileSelector);

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-M" tag="h1" size={30} className={cls.title}>
                Привет, <span>{profile?.name}</span>
            </Typography>
            <BreadCrumbs
                className={cn(cls.crumbs)}
                items={[
                    { link: "#", text: "Продвижение" },
                    {
                        link: "#",
                        text: `Выкупы`,
                    },
                ]}
            />
        </div>
    );
};

export { ReferralCrumbs };
