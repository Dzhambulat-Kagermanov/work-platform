import { FC, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib";
import { Typography } from "../Typography";
import { ErrorIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    icon?: ReactNode;
    label?: string;
    error?: ReactNode;
    wrapperCls?: string;
    inpCls?: string;
    contentCls?: string;
    labelCls?: string;
    errorCls?: string;
    errorIcon?: true | ReactNode;
}
const Input: FC<Props> = ({
    icon,
    wrapperCls,
    contentCls,
    labelCls,
    inpCls,
    errorCls,
    label,
    errorIcon,
    error,
    ...other
}) => {
    return (
        <div
            className={cn(cls.wrapper, [wrapperCls], {
                [cls.hasError]: !!error,
            })}
        >
            {label && (
                <Typography
                    font="Inter-M"
                    size={14}
                    className={cn(cls.label, [labelCls])}
                >
                    {label}
                </Typography>
            )}
            <div
                className={cn(cls.content, [contentCls], {
                    [cls.has_icon]: icon !== undefined,
                })}
            >
                {icon}
                <input className={cn(cls.input, [inpCls])} {...other} />
                {error &&
                    (errorIcon === true ? (
                        <ErrorIcon className={cn(cls.error_icon)} />
                    ) : (
                        errorIcon
                    ))}
            </div>
            {error && (
                <Typography
                    font="Inter-R"
                    size={14}
                    className={cn(cls.error, [errorCls])}
                >
                    {error}
                </Typography>
            )}
        </div>
    );
};

export { Input };
