"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input, InputMaskSwitcher, Timer, Typography } from "@/components/ui";
import { RegistrationFormSubmit } from "@/components/features/RegistrationFormSubmit";
import { PHONE_MASKS } from "@/constants";
import cls from "./index.module.scss";
import { Formik } from "formik";
import { useRegisterEndMutation, useRegisterSendCodeMutation } from "@/hooks/api/auth";
import useRegisterVerifyCodeMutation from "@/hooks/api/auth/useRegisterVerifyCodeMutation";
import toast from "react-hot-toast";
import useRolesQuery from "@/hooks/api/auth/useRolesQuery";
import { useParams, useSearchParams } from "next/navigation";

interface Props extends TClassName {}
const RegistrationForm: FC<Props> = ({ className }) => {
    const params = useSearchParams();

    const [currentStep, setCurrentStep] = useState<"send" | "verify" | "end">(
        params.get("currentStep") === "end" ? "end" : "send",
    );
    const [codeSendAgain, setCodeSendAgain] = useState(false);
    const registerSendCodeMutation = useRegisterSendCodeMutation();
    const registerVerifyCodeMutation = useRegisterVerifyCodeMutation();
    const registerEndMutation = useRegisterEndMutation();

    const { data: roles } = useRolesQuery();

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
            onSubmit={(values, { setSubmitting }) => {

                const onSettled = () => setSubmitting(false);

                if (currentStep === "send") {
                    registerSendCodeMutation.mutate(
                        {
                            phone: values.phone,
                        },
                        {
                            onSuccess: () => {
                                toast.success("Код успешно отправлен");
                                setCurrentStep("verify");
                            },
                            onSettled,
                        },
                    );
                    return;
                }

                if (currentStep === "verify") {
                    const role = roles?.find((el) => el.slug === "buyer");
                    registerVerifyCodeMutation.mutate(
                        {
                            phone: values.phone,
                            code: values.code,
                            role_id: role?.id ?? -1,
                        },
                        {
                            onSuccess: () => {
                                toast.success("Номер телефона подтвержден");
                                setCurrentStep("end");
                            },
                            onError: () => {
                                toast.error("Неверный код");
                            },
                            onSettled
                        },
                    );
                    return;
                }

                if (currentStep === "end") {
                    registerEndMutation.mutate({
                        name: values.name,
                        password: values.password,
                        password_confirmation: values.passwordAgain,
                    }, {
                        onSettled
                    });
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
                                        second={60}
                                        format={undefined}
                                        onComplete={() =>
                                            setCodeSendAgain(true)
                                        }
                                    />{" "}
                                    сек.
                                </Typography>
                            ) : (
                                <></>
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

export { RegistrationForm };
