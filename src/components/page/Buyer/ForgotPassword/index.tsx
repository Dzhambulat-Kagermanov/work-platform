import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { SignLayout } from "@/components/layouts/Sign";
import { ForgotForm } from "@/components/widgets";
import { AuthActions } from "@/components/widgets/Buyer/AuthActions";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const ForgotPasswordPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse redirectLink={ROUTES.BUYER.ACCOUNT.VALUE}>
            <SignLayout
                logo="/images/shared/logo-v2.svg"
                title="Восстановление пароля"
                className={cn(cls.forgot, [className])}
            >
                <ForgotForm className={cn(cls.form)} />
                <AuthActions type="forAuth" className={cn(cls.actions)} />
            </SignLayout>
        </AuthWrapper>
    );
};

export { ForgotPasswordPage };
