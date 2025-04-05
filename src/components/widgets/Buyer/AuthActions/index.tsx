import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Link from "next/link";
import cls from "./index.module.scss";
import { useSessionQuery } from "@/hooks/api/auth";

interface Props extends TClassName {
    type:
        | "forRegistration"
        | "forAuth"
        | "forSalesmanAuth"
        | "forSalesmanRegistration";
}
const AuthActions: FC<Props> = ({ className, type }) => {
    const { data: user } = useSessionQuery();

    return (
        <div className={cn(cls.wrapper, [className])}>
            {!user ? (
                <>
                    <Typography
                        font="Inter-R"
                        size={14}
                        className={cn(cls.text, [cls.registration])}
                    >
                        {type === "forAuth" || type === "forSalesmanAuth"
                            ? "Нет аккаунта?"
                            : "Есть аккаунт?"}
                        <Link
                            href={
                                type === "forAuth"
                                    ? "/buyer/registration"
                                    : type === "forSalesmanAuth"
                                      ? "/salesman/registration"
                                      : type === "forRegistration"
                                        ? "/buyer/auth"
                                        : "/salesman/auth"
                            }
                            className={cn(cls.link)}
                        >
                            <Typography tag="span" font="Inter-SB" size={14}>
                                {" "}
                                {type === "forAuth" ||
                                type === "forSalesmanAuth"
                                    ? "Зарегистрироваться?"
                                    : "Войти"}
                            </Typography>
                        </Link>
                    </Typography>
                    {(type === "forAuth" || type === "forSalesmanAuth") && (
                        <Link
                            href={
                                type === "forAuth"
                                    ? "/buyer/forgot-password"
                                    : "/salesman/forgot-password"
                            }
                            className={cn(cls.text, [
                                cls.forget_password,
                                cls.link,
                            ])}
                        >
                            <Typography font="Inter-SB" size={14}>
                                Забыли пароль?
                            </Typography>
                        </Link>
                    )}
                </>
            ) : (
                <></>
            )}
            <Typography
                font="Inter-R"
                size={10}
                className={cn(cls.info, [cls.text])}
            >
                Продолжая, вы подтверждаете, что ознакомились с 
                <Link
                    className={cn(cls.link)}
                    href={"https://mpboost.pro/docs/privacy-policy.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    политикой конфиденциальности
                </Link>
                 и 
                <Link
                    className={cn(cls.link)}
                    href={"https://mpboost.pro/docs/policy-mpboost-pro.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    публичной офертой
                </Link>
            </Typography>
        </div>
    );
};

export { AuthActions };
