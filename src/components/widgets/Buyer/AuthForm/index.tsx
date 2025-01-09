"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input, InputMaskSwitcher } from "@/components/ui";
import { AuthFormSubmit } from "@/components/features/AuthFormSubmit";
import { PHONE_MASKS } from "@/constants";
import cls from "./index.module.scss";
import { useLoginMutation } from "@/hooks/api/auth";
import { Formik } from "formik";

interface Props extends TClassName {}
const AuthForm: FC<Props> = ({ className }) => {

    const loginMutation = useLoginMutation();

    return (
        <Formik
            initialValues={{
                phone: "",
                password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                loginMutation.mutate(values, {
                    onSettled: () => {
                        setSubmitting(false);
                    }
                })

            }}
        >
            {
                ({
                    handleSubmit,
                    isSubmitting,
                    handleChange,
                    values,
                    setFieldValue,
                }) => (
                    <form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
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
                        />
                        <Input
                            type="password"
                            errorIcon
                            wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                            label="Пароль"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <AuthFormSubmit disabled={isSubmitting || (!values.password || !values.phone)} className={cn(cls.submit_btn)} type="submit" />
                    </form>
                )
            }
        </Formik>
    );
};

export { AuthForm };
