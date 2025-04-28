"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import {
    Button,
    Input,
    InputMaskSwitcher,
    Timer,
    Typography,
} from "@/components/ui";
import { PHONE_MASKS } from "@/constants";
import cls from "./forgot-form.module.scss";
import { Formik } from "formik";
import {
    usePasswordResetMutation,
    usePasswordResetSendCodeMutation,
    usePasswordResetVerifyCodeMutation,
} from "@/hooks/api/auth";

interface Props extends TClassName {}
const ForgotForm: FC<Props> = ({ className }) => {
    const { mutate: passwordResetSendCode } =
        usePasswordResetSendCodeMutation();
    const { mutate: passwordResetVerifyCode } =
        usePasswordResetVerifyCodeMutation();
    const { mutate: passwordReset } = usePasswordResetMutation();
    const [codeSendAgain, setCodeSendAgain] = useState(false);
    const [currentStep, setCurrentStep] = useState<
        "phone" | "code" | "password"
    >("phone");

    return (
        <Formik
            initialValues={{
                phone: "",
                code: "",
                password: "",
                passwordAgain: "",
            }}
            validate={(values) => {
                const errors: Partial<
                    Record<
                        "phone" | "code" | "password" | "passwordAgain",
                        string
                    >
                > = {};

                if (currentStep === "password") {
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
            onSubmit={(values, { setSubmitting }) => {
                const onSettled = () => {
                    setSubmitting(false);
                };

                if (currentStep === "phone") {
                    passwordResetSendCode(values.phone, {
                        onSuccess: () => {
                            setCurrentStep("code");
                        },
                        onSettled,
                    });

                    return;
                }

                if (currentStep === "code") {
                    passwordResetVerifyCode(
                        {
                            code: values.code,
                            phone: values.phone,
                        },
                        {
                            onSuccess: () => {
                                setCurrentStep("password");
                            },
                            onSettled,
                        },
                    );

                    return;
                }

                if (currentStep === "password") {
                    passwordReset(
                        {
                            code: values.code,
                            phone: values.phone,
                            password: values.password,
                            password_confirmation: values.passwordAgain,
                        },
                        {
                            onSuccess: () => {
                                setCurrentStep("password");
                            },
                            onSettled,
                        },
                    );

                    return;
                }
            }}
        >
            {({ handleSubmit, isSubmitting, values, errors, handleChange }) => (
                <form
                    onSubmit={handleSubmit}
                    className={cn(cls.wrapper, [className])}
                >
                    <InputMaskSwitcher
                        masks={PHONE_MASKS}
                        errorIcon
                        wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
                        label="Номер телефона"
                        lazy={false}
                        placeholderChar="_"
                        onBlur={handleChange}
                        name="phone"
                        value={values.phone}
                        error={errors.phone}
                        disabled={isSubmitting || currentStep !== "phone"}
                    />
                    {currentStep !== "phone" ? (
                        <div className="flex flex-col gap-1">
                            <Input
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Введите 4-значный код из СМС"
                                disabled={
                                    isSubmitting || currentStep !== "code"
                                }
                                name="code"
                                value={values.code}
                                onChange={handleChange}
                                error={errors.code}
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
                                    onClick={() => handleSubmit()}
                                    className="underline text-left text-sm opacity-80"
                                >
                                    Запросить новый код
                                </button>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                    {currentStep === "password" ? (
                        <>
                            <Input
                                type="password"
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Придумайте пароль"
                                disabled={isSubmitting}
                                error={errors.password}
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <Input
                                type="password"
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                                label="Повторите пароль"
                                disabled={isSubmitting}
                                error={errors.passwordAgain}
                                name="passwordAgain"
                                value={values.passwordAgain}
                                onChange={handleChange}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        theme="fill"
                        size="mid"
                        className={cn(cls.next_btn)}
                        wFull
                    >
                        Далее
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default ForgotForm;
