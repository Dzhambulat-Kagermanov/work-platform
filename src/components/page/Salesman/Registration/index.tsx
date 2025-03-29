import { FC, Suspense } from "react"
import { TClassName } from "@/types"
import { SignLayout } from "@/components/layouts/Sign"
import { cn } from "@/lib"
import { RegistrationForm } from "@/components"
import { SalesmanAuthBackgroundLayout } from "@/components/layouts/SalesmanAuthBackground"
import cls from "./index.module.scss"
import { AuthWrapper } from "@/components/widgets/shared/wrappers"

interface Props extends TClassName { }
const RegistrationPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper reverse>
            <SalesmanAuthBackgroundLayout>
                <SignLayout
                    logo="/images/shared/logo-v2.svg"
                    title="Регистрация продавца"
                    authActions="forSalesmanRegistration"
                    className={cn(cls.main, [className])}
                    paddingStubCls={cn(cls.padding_stub)}
                >
                    <Suspense fallback={<></>}>
                        <RegistrationForm role="seller" className={cn(cls.form)} />
                    </Suspense>
                </SignLayout>
            </SalesmanAuthBackgroundLayout>
        </AuthWrapper>
    )
}

export { RegistrationPage }
