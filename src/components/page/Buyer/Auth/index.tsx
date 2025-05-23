import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { AuthForm } from "@/components";
import { SignLayout } from "@/components/layouts/Sign";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const AuthPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse redirectLink={ROUTES.BUYER.ACCOUNT.VALUE}>
            <SignLayout
                logo="/images/shared/logo.svg"
                title="Авторизация"
                authActions="forAuth"
                className={cn(cls.auth, [className])}
            >
                <AuthForm className={cn(cls.form)} />
                {/* <div className={cn(cls.separator)}>
                    <hr />
                    <Typography font="Inter-R" size={14}>
                        Или
                    </Typography>
                    <hr />
                </div>
                <SignFormTelegram className={cn(cls.telegram_sign_in)} /> */}
            </SignLayout>
        </AuthWrapper>
    );
};

export { AuthPage };
