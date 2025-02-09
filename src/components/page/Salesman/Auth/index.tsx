import { FC } from "react";
import { TClassName } from "@/types";
import { SignLayout } from "@/components/layouts/Sign";
import { cn } from "@/lib";
import { AuthForm } from "@/components/widgets/Salesman/AuthForm";
import { SalesmanAuthBackgroundLayout } from "@/components/layouts/SalesmanAuthBackground";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const AuthPage: FC<Props> = ({ className }) => {
    return (
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
    );
};

export { AuthPage };
