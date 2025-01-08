import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { RegistrationForm } from "@/components/widgets/Buyer/RegistrationForm";
import { Typography } from "@/components/ui";
import { SignFormTelegram } from "@/components/features/SignFormTelegram";
import { SignLayout } from "@/components/layouts/Sign";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/auth-wrapper";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const RegistrationPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse redirectLink={ROUTES.BUYER.ACCOUNT}>
            <SignLayout
                logo="/images/shared/logo.svg"
                title="Регистрация"
                authActions="forRegistration"
                className={cn(cls.auth, [className])}
            >
                <RegistrationForm className={cn(cls.form)} />
                <div className={cn(cls.separator)}>
                    <hr />
                    <Typography font="Inter-R" size={14}>
                        Или
                    </Typography>
                    <hr />
                </div>
                <SignFormTelegram className={cn(cls.telegram_sign_in)} />
            </SignLayout>
        </AuthWrapper>
    );
};

export { RegistrationPage };
