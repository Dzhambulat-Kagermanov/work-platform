import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import {
    AccountContentBlock,
    Button,
    Input,
    InputMaskSwitcher,
} from "@/components/ui";
import { AccountExit } from "@/components/features/AccountExit";
import { useScreen } from "@/hooks";
import { MD_BIG, PHONE_MASKS } from "@/constants";
import { PasswordChangedModal } from "../../shared/PasswordChangedModal";
import cls from "./index.module.scss";
import { Formik } from "formik";
import { useSessionQuery, useUpdateProfileMutation } from "@/hooks/api/auth";

interface Props extends TClassName {}
const AccountForm: FC<Props> = ({ className }) => {
    const { data: user } = useSessionQuery();
    const updateUserMutation = useUpdateProfileMutation();

    const width = useScreen();

    return (
        <AccountContentBlock
            tag="section"
            title="Личная информация"
            className={cn(cls.wrapper, [className])}
            endChildren={
                width > MD_BIG && <AccountExit className={cn(cls.exit_btn)} />
            }
        >
            <Formik
                initialValues={{
                    name: user?.name || "",
                    phone: user?.phone || "",
                    email: user?.email || "",
                    password: "",
                    passwordAgain: "",
                }}
                validate={(values) => {
                    const errors: Partial<
                        Record<
                            | "name"
                            | "phone"
                            | "email"
                            | "password"
                            | "passwordAgain",
                            string
                        >
                    > = {};

                    if (values.name.length < 2) {
                        errors.name = "Имя не может быть такое короткое";
                    }

                    if (values.password) {
                        if (values.password.length < 8) {
                            errors.password =
                                "Пароль должен быть не менее 8 символов";
                        }
                    }

                    if (values.password !== values.passwordAgain) {
                        errors.passwordAgain = "Пароли должны совпадать";
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    updateUserMutation.mutate(
                        {
                            name: values.name,
                            phone: values.phone,
                            email: values.email,
                            password: values.password,
                            password_confirmation: values.passwordAgain,
                        },
                        {
                            onSettled: () => {
                                setSubmitting(false);
                            },
                        },
                    );
                }}
            >
                {({
                    handleSubmit,
                    values,
                    handleChange,
                    isSubmitting,
                    errors,
                }) => (
                    <form onSubmit={handleSubmit} className={cn(cls.form)}>
                        <div className={cn(cls.content)}>
                            <Input
                                wrapperCls={cn(cls.inp_wrapper)}
                                inpCls={cn(cls.inp)}
                                label="Имя пользователя"
                                onChange={handleChange}
                                name="name"
                                value={values.name}
                                error={errors.name}
                            />
                            <InputMaskSwitcher
                                masks={PHONE_MASKS}
                                hideDropdown
                                errorIcon
                                wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
                                label="Телефон"
                                lazy={false}
                                placeholderChar="_"
                                onBlur={handleChange}
                                name="phone"
                                value={values.phone}
                                error={errors.phone}
                            />
                            <Input
                                type="email"
                                wrapperCls={cn(cls.inp_wrapper)}
                                inpCls={cn(cls.inp)}
                                label="Почта"
                                onChange={handleChange}
                                name="email"
                                value={values.email}
                                error={errors.email}
                            />
                            <Input
                                type="password"
                                wrapperCls={cn(cls.inp_wrapper)}
                                inpCls={cn(cls.inp)}
                                label="Новый пароль"
                                onChange={handleChange}
                                name="password"
                                value={values.password}
                                error={errors.password}
                            />
                            <Input
                                type="password"
                                wrapperCls={cn(cls.inp_wrapper)}
                                inpCls={cn(cls.inp)}
                                label="Новый пароль еще раз"
                                onChange={handleChange}
                                name="passwordAgain"
                                value={values.passwordAgain}
                                error={errors.passwordAgain}
                            />
                        </div>
                        <div className={cn(cls.btn_wrapper)}>
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                theme="fill"
                                className={cn(cls.btn_save)}
                            >
                                Сохранить
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
            <PasswordChangedModal className={cn(cls.password_changed_modal)} />
        </AccountContentBlock>
    );
};

export { AccountForm };
