import { FC, Suspense } from "react"
import { TClassName } from "@/types"
import { cn } from "@/lib"
import { RegistrationForm } from "@/components"
import { SignLayout } from "@/components/layouts/Sign"
import cls from "./index.module.scss"
import { AuthWrapper } from "@/components/widgets/shared/wrappers"
import { ROUTES } from "@/constants"

interface Props extends TClassName { }
const RegistrationPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper
            reverse
            redirectLink={ROUTES.BUYER.ACCOUNT.VALUE}
            isRegister
        >
            <SignLayout
                logo="/images/shared/logo.svg"
                title="Регистрация"
                authActions="forRegistration"
                className={cn(cls.auth, [className])}
            >
                <Suspense fallback={<></>}>
                    <RegistrationForm role="buyer" className={cn(cls.form)} />
                </Suspense>
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
    )
}

export { RegistrationPage }
