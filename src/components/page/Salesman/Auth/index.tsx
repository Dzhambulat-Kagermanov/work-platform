import { FC } from "react";
import { TClassName } from "@/types";
import { SignLayout } from "@/components/layouts/Sign";
import { cn } from "@/lib";
import { AuthForm } from "@/components";
import { SalesmanAuthBackgroundLayout } from "@/components/layouts/SalesmanAuthBackground";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const AuthPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse redirectLink={ROUTES.MAIN}>
            <SalesmanAuthBackgroundLayout>
                <SignLayout
                    logo="/images/shared/logo-v2.svg"
                    title="Авторизация продавца"
                    authActions="forSalesmanAuth"
                    className={cn(cls.main, [className])}
                    paddingStubCls={cn(cls.padding_stub)}
                >
                    <AuthForm className={cn(cls.form)} />
                </SignLayout>
            </SalesmanAuthBackgroundLayout>
        </AuthWrapper>
    );
};

export { AuthPage };
