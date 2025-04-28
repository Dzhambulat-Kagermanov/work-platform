"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input, InputMaskSwitcher, Typography } from "@/components/ui";
import { AuthFormSubmit } from "@/components/features/AuthFormSubmit";
import { PHONE_MASKS } from "@/constants";
import cls from "./index.module.scss";
import { useLoginMutation } from "@/hooks/api/auth";
import { Formik } from "formik";

interface Props extends TClassName {
    withoutErrorToast?: boolean;
    noRedirectOnSuccess?: boolean;
    onSuccess?: () => void;
}
const AuthForm: FC<Props> = ({
    className,
    withoutErrorToast,
    noRedirectOnSuccess,
    onSuccess,
}) => {
    const loginMutation = useLoginMutation({
        withoutErrorToast,
        noRedirectOnSuccess,
    });

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
                    },
                    onSuccess: () => {
                        onSuccess && onSuccess();
                    },
                });
            }}
        >
            {({
                handleSubmit,
                isSubmitting,
                handleChange,
                values,
                setFieldValue,
            }) => (
                <form
                    className={cn(cls.wrapper, [className])}
                    onSubmit={handleSubmit}
                >
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
                        disabled={isSubmitting}
                    />
                    <Input
                        type="password"
                        errorIcon
                        wrapperCls={cn(cls.inp_wrapper, [cls.password])}
                        label="Пароль"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    {loginMutation.isError &&
                    loginMutation.error?.response?.data?.message ? (
                        <div className={cls.error_container}>
                            <Typography
                                className={cls.error_message}
                                font="Inter-R"
                                tag="p"
                                size={16}
                            >
                                {loginMutation.error.response.data.message.includes('не найден') ? 
                                    'Пользователь с таким номером телефона не зарегистрирован.' : 
                                    loginMutation.error.response.data.message
                                }
                            </Typography>
                        </div>
                    ) : null}
                    <AuthFormSubmit
                        disabled={
                            isSubmitting || !values.password || !values.phone
                        }
                        className={cn(cls.submit_btn)}
                        type="submit"
                    />
                </form>
            )}
        </Formik>
    );
};

export default AuthForm;
