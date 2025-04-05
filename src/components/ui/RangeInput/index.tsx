"use client";
import { Dispatch, FC, memo, ReactNode, SetStateAction } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName {
    min: number;
    max: number;
    value: [number, number];
    minBetweenValue: number;
    steps: number;
    visibleValueMin?: (param: string) => ReactNode;
    visibleValueMax?: (param: string) => ReactNode;
    setValue: Dispatch<SetStateAction<[number, number]>>;
}
const RangeInput: FC<Props> = memo(
    ({
        max,
        min,
        steps,
        className,
        minBetweenValue,
        value,
        setValue,
        visibleValueMax,
        visibleValueMin,
    }) => {
        return (
            <div className={cn(cls.wrapper, [className])}>
                <div className={cn(cls.progress_wrapper)}>
                    <div
                        className={cn(cls.progress)}
                        style={{
                            left: `${(value[0] / max) * 100}%`,
                            right: `${100 - (value[1] / max) * 100}%`,
                        }}
                    />
                </div>
                <div className={cn(cls.ranges)}>
                    <div className={cn(cls.value_info_wrapper)}>
                        {visibleValueMin && (
                            <div
                                className={cn(cls.value_info, [
                                    cls.min_value_info,
                                ])}
                                style={{
                                    left: `${(value[0] / max) * 100}%`,
                                    right: `auto`,
                                }}
                            >
                                {visibleValueMin(value[0].toString())}
                            </div>
                        )}
                        {visibleValueMax && (
                            <div
                                className={cn(cls.value_info, [
                                    cls.max_value_info,
                                ])}
                                style={{
                                    left: `auto`,
                                    right: `${100 - (value[1] / max) * 100}%`,
                                }}
                            >
                                {visibleValueMax(value[1].toString())}
                            </div>
                        )}
                    </div>
                    <input
                        onChange={(e) => {
                            const VALUE = +e.target.value;

                            setValue((cur) => {
                                if (VALUE + minBetweenValue > cur[1]) {
                                    return cur;
                                }

                                return [VALUE, cur[1]];
                            });
                        }}
                        value={value[0]}
                        className={cn(cls.range, [cls.min])}
                        type="range"
                        min={min}
                        max={max}
                        step={max / steps}
                    />
                    <input
                        onChange={(e) => {
                            const VALUE = +e.target.value;
                            setValue((cur) => {
                                if (VALUE - minBetweenValue < cur[0]) {
                                    return cur;
                                }

                                return [cur[0], VALUE];
                            });
                        }}
                        value={value[1]}
                        className={cn(cls.range, [cls.max])}
                        type="range"
                        min={min}
                        max={max}
                        step={max / steps}
                    />
                </div>
            </div>
        );
    },
);

export { RangeInput };
