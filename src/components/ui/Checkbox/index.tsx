"use client";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/lib";
import { Typography } from "../Typography";
import cls from "./index.module.scss";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    inpCls?: string;
}
const Checkbox: FC<Props> = ({ className, label, inpCls, ...other }) => {
    return (
        <label className={cn(cls.label, [className])}>
            <input
                type="checkbox"
                className={cn(cls.inp, [inpCls])}
                {...other}
            />
            {label && (
                <Typography font="Inter-R" size={16}>
                    {label}
                </Typography>
            )}
        </label>
    );
};

export { Checkbox };
