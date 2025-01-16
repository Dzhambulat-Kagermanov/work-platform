"use client";
import { FC, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input, InputMaskSwitcher, Timer, Typography } from "@/components/ui";
import { RegistrationFormSubmit } from "@/components/features/RegistrationFormSubmit";
import { PHONE_MASKS } from "@/constants";
import cls from "./index.module.scss";
import { Formik } from "formik";
import {
    useRegisterEndMutation,
    useRegisterSendCodeMutation,
    useSessionQuery,
} from "@/hooks/api/auth";
import useRegisterVerifyCodeMutation from "@/hooks/api/auth/useRegisterVerifyCodeMutation";
import toast from "react-hot-toast";
import useRolesQuery from "@/hooks/api/auth/useRolesQuery";
import { useSearchParams } from "next/navigation";
import { RoleSlug } from "@/types/api";

interface Props extends TClassName {
    role: RoleSlug;
}
const RegistrationForm: FC<Props> = ({ className, role }) => {
    const params = useSearchParams();

    const { data: userData } = useSessionQuery();

    const [currentStep, setCurrentStep] = useState<"send" | "verify" | "end">(
        params.get("currentStep") === "end" ? "end" : "send",
    );
    const [codeSendAgain, setCodeSendAgain] = useState(false);
    const registerSendCodeMutation = useRegisterSendCodeMutation();
    const registerVerifyCodeMutation = useRegisterVerifyCodeMutation();
    const registerEndMutation = useRegisterEndMutation();

    const { data: roles } = useRolesQuery();

    useEffect(() => {
        (() => {
            if (!userData) {
                setCurrentStep("send");
                return;
            }

            if (!userData.is_configured) {
                setCurrentStep("end");
            }
        })();
    }, [userData]);

    return (
        <Formik
            initialValues={{
                phone: "",
                code: "",
                name: "",
                password: "",
                passwordAgain: "",
            }}
            validate={(values) => {
                const errors: {
                    password?: string;
                    passwordAgain?: string;
                    name?: string;
                } = {};
                if (currentStep === "end") {
                    if (values.name.length < 2) {
                        errors.name = "Имя должно быть не такое короткое";
                    }
                    if (values.password.length < 8) {
                        errors.password =
                            "Пароль должен быть не менее 8 символов";
                    }
                    if (values.passwordAgain !== values.password) {
                        errors.passwordAgain = "Пароли должны совпадать";
                    }
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting, setErrors }) => {
                const onSettled = () => setSubmitting(false);

                if (currentStep === "send") {
                    registerSendCodeMutation.mutate(
                        {
                            phone: values.phone,
                        },
                        {
                            onSuccess: () => {
                                setCurrentStep("verify");
                            },
                            onSettled,
                        },
                    );
                    return;
                }

                if (currentStep === "verify") {
                    const selectedRole = roles?.find((el) => el.slug === role);
                    registerVerifyCodeMutation.mutate(
                        {
                            phone: values.phone,
                            code: values.code,
                            role_id: selectedRole?.id ?? -1,
                        },
                        {
                            onSuccess: () => {
                                toast.success("Номер телефона подтвержден");
                                setCurrentStep("end");
                            },
                            onError: () => {
                                setErrors({
                                    code: "Неверный код",
                                });
                            },
                            onSettled,
                        },
                    );
                    return;
                }

                if (currentStep === "end") {
                    registerEndMutation.mutate(
                        {
                            name: values.name,
                            password: values.password,
                            password_confirmation: values.passwordAgain,
                        },
                        {
                            onSettled,
                        },
                    );
                }
            }}
        >
            {({
                handleSubmit,
                handleChange,
                setFieldValue,
                isSubmitting,
                errors,
                values,
            }) => (
                <form
                    className={cn(cls.wrapper, [className])}
                    onSubmit={handleSubmit}
                >
                    {currentStep === "send" || currentStep === "verify" ? (
                        <InputMaskSwitcher
                            masks={PHONE_MASKS}
                            errorIcon
                            wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
                            label="Номер телефона"
                            lazy={false}
                            placeholderChar="_"
                            onComplete={(value) => {
                                setFieldValue("phone", value);
                            }}
                            disabled={currentStep === "verify"}
                            name="phone"
                        />
                    ) : (
                        <></>
                    )}
                    {currentStep === "verify" ? (
                        <div className="flex flex-col gap-2">
                            <Input
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Введите 4-значный код из СМС"
                                error={errors.code}
                                name="code"
                                value={values.code}
                                onChange={handleChange}
                            />
                            {!codeSendAgain ? (
                                <Typography
                                    font="Inter-R"
                                    size={14}
                                    tag="span"
                                    className={cn(cls.timer)}
                                >
                                    Запросить новый код можно через{" "}
                                    <Timer
                                        onComplete={() =>
                                            setCodeSendAgain(true)
                                        }
                                    />{" "}
                                    сек.
                                </Typography>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => {
                                        registerSendCodeMutation.mutate(
                                            {
                                                phone: values.phone,
                                            },
                                            {
                                                onSuccess: () => {
                                                    toast.success(
                                                        "Код успешно отправлен",
                                                    );
                                                    setCodeSendAgain(false);
                                                },
                                            },
                                        );
                                    }}
                                    className="underline text-left text-sm opacity-80"
                                >
                                    Запросить новый код
                                </button>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                    {currentStep === "end" ? (
                        <>
                            <Input
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Введите ваше имя"
                                name="name"
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <Input
                                type="password"
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Придумайте пароль"
                                name="password"
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <Input
                                type="password"
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Повторите пароль"
                                name="passwordAgain"
                                onChange={handleChange}
                                error={errors.passwordAgain}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    <RegistrationFormSubmit
                        disabled={isSubmitting}
                        className={cn(cls.submit_btn)}
                        type="submit"
                    />
                </form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
