import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { SignLayout } from "@/components/layouts/Sign";
import { ForgotForm } from "@/components/widgets/Buyer/ForgotForm";
import { AuthActions } from "@/components/widgets/Buyer/AuthActions";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ForgotPasswordPage: FC<Props> = ({ className }) => {
    return (
        <SignLayout
            logo="/images/shared/logo-v2.svg"
            title="Восстановление пароля"
            className={cn(cls.forgot, [className])}
        >
            <ForgotForm className={cn(cls.form)} />
            <AuthActions type="forAuth" className={cn(cls.actions)} />
        </SignLayout>
    );
};

export { ForgotPasswordPage };
