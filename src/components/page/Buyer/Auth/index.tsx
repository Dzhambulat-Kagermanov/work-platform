import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { AuthForm } from "@/components/widgets/Buyer/AuthForm";
import { SignFormTelegram } from "@/components/features/SignFormTelegram";
import { SignLayout } from "@/components/layouts/Sign";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const AuthPage: FC<Props> = ({ className }) => {
    return (
        <SignLayout
            logo="/images/shared/logo.svg"
            title="Авторизация"
            authActions="forAuth"
            className={cn(cls.auth, [className])}
        >
            <AuthForm className={cn(cls.form)} />
            <div className={cn(cls.separator)}>
                <hr />
                <Typography font="Inter-R" size={14}>
                    Или
                </Typography>
                <hr />
            </div>
            <SignFormTelegram className={cn(cls.telegram_sign_in)} />
        </SignLayout>
    );
};

export { AuthPage };
