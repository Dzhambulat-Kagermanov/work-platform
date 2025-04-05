"use client";
import {
    CSSProperties,
    FC,
    InputHTMLAttributes,
    ReactNode,
    useState,
} from "react";
import cls from "./index.module.scss";
import { cn } from "@/lib";

interface Props
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value"> {
    visibleValue?: boolean;
    visibleMinValue?: boolean;
    visibleMaxValue?: boolean;
    customVisibleValue?: (val: string) => ReactNode;
    customVisibleMinValue?: (val: string) => ReactNode;
    customVisibleMaxValue?: (val: string) => ReactNode;
    inpCls?: string;
    min: number;
    max: number;
    steps: number;
    thumbSize?: number;
    defaultValue?: number;
}
const SliderInput: FC<Props> = ({
    customVisibleMaxValue,
    customVisibleMinValue,
    customVisibleValue,
    visibleMaxValue,
    visibleMinValue,
    visibleValue,
    thumbSize = 24,
    className,
    max,
    min,
    defaultValue,
    steps,
    onChange,
    ...other
}) => {
    const [value, setValue] = useState<number>(
        defaultValue ? (defaultValue > max ? max : defaultValue) : min,
    );

    return (
        <div
            className={cn(cls.wrapper, [className])}
            style={
                {
                    "--thumb-size": `${thumbSize}px`,
                } as CSSProperties
            }
        >
            <div className={cn(cls.progress_wrapper)}>
                <div
                    className={cn(cls.progress)}
                    style={{
                        right: `calc(${100 - (value / max) * 100}% - ${thumbSize}px)`,
                    }}
                />
            </div>
            <div className={cn(cls.visible_values)}>
                {visibleMaxValue && (
                    <div className={cn(cls.val, [cls.min_val])}>
                        {customVisibleMaxValue
                            ? customVisibleMaxValue(min.toString())
                            : min}
                    </div>
                )}
                {visibleMinValue && (
                    <div className={cn(cls.val, [cls.max_val])}>
                        {customVisibleMaxValue
                            ? customVisibleMaxValue(max.toString())
                            : max}
                    </div>
                )}
                {visibleValue && (
                    <div
                        className={cn(cls.val, [cls.cur_val])}
                        style={{
                            right: `${100 - (value / max) * 100}%`,
                        }}
                    >
                        {customVisibleMaxValue
                            ? customVisibleMaxValue(value.toString())
                            : value}
                    </div>
                )}
            </div>
            <input
                onChange={(e) => {
                    const VALUE = +e.target.value;
                    setValue(VALUE);
                    onChange && onChange(e);
                }}
                value={value}
                min={min}
                max={max}
                step={max / steps}
                type="range"
                {...other}
                className={cn(cls.inp)}
            />
        </div>
    );
};

export { SliderInput };
