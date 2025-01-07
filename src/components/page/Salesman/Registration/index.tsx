import { FC } from "react";
import { TClassName } from "@/types";
import { SignLayout } from "@/components/layouts/Sign";
import { cn } from "@/lib";
import { RegistrationForm } from "@/components/widgets/Salesman/RegistrationForm";
import { SalesmanAuthBackgroundLayout } from "@/components/layouts/SalesmanAuthBackground";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const RegistrationPage: FC<Props> = ({ className }) => {
    return (
        <SalesmanAuthBackgroundLayout>
            <SignLayout
                logo="/images/shared/logo-v2.svg"
                title="Регистрация продавца"
                authActions="forSalesmanRegistration"
                className={cn(cls.main, [className])}
                paddingStubCls={cn(cls.padding_stub)}
            >
                <RegistrationForm className={cn(cls.form)} />
            </SignLayout>
        </SalesmanAuthBackgroundLayout>
    );
};

export { RegistrationPage };
