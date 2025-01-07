import { FC, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib";
import { Typography } from "../Typography";
import cls from "./index.module.scss";

interface Props
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
    icon?: ReactNode;
    label?: string;
    error?: ReactNode;
    wrapperCls?: string;
    textareaCls?: string;
    contentCls?: string;
    labelCls?: string;
    errorCls?: string;
}
const Textarea: FC<Props> = ({
    icon,
    wrapperCls,
    contentCls,
    labelCls,
    textareaCls,
    errorCls,
    label,
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
            <div className={cn(cls.content, [contentCls])}>
                <textarea
                    className={cn(cls.textarea, [textareaCls])}
                    {...other}
                />
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

export { Textarea };
