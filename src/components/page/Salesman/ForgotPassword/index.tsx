import { FC } from "react";
import { TClassName } from "@/types";
import { SignLayout } from "@/components/layouts/Sign";
import { cn } from "@/lib";
import { SalesmanAuthBackgroundLayout } from "@/components/layouts/SalesmanAuthBackground";
import { AuthActions } from "@/components/widgets/Buyer/AuthActions";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ForgotForm } from "@/components/widgets";

interface Props extends TClassName {}
const ForgotPasswordPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse>
            <SalesmanAuthBackgroundLayout>
                <SignLayout
                    logo="/images/shared/logo-v2.svg"
                    title="Восстановление пароля"
                    className={cn(cls.main, [className])}
                    paddingStubCls={cn(cls.padding_stub)}
                >
                    <ForgotForm className={cn(cls.form)} />
                    <AuthActions
                        type="forSalesmanAuth"
                        className={cn(cls.actions)}
                    />
                </SignLayout>
            </SalesmanAuthBackgroundLayout>
        </AuthWrapper>
    );
};

export { ForgotPasswordPage };
