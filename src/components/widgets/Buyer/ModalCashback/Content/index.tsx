"use client";
import { Dispatch, FC, SetStateAction } from "react";
import cls from "./index.module.scss";
import { Typography, Input, RangeInput } from "@/components/ui";
import { cn } from "@/lib";

interface Props {
    min: number;
    max: number;
    range: [number, number];
    steps: number;
    setRange: Dispatch<SetStateAction<[number, number]>>;
    minBetweenValue: number;
    sliderInpCls?: string;
}
const Content: FC<Props> = ({
    max,
    min,
    minBetweenValue,
    range,
    setRange,
    steps,
    sliderInpCls,
}) => {
    return (
        <>
            <Typography font="Inter-SB" size={18} tag="h2">
                Размер кэшбека
            </Typography>
            <div className={cn(cls.inputs)}>
                <Input
                    onChange={(e) => {}}
                    tabIndex={1000}
                    value={range !== undefined ? `от ${range[0]}%` : `от 0%`}
                    onBlur={() => {}}
                />
                <hr />
                <Input
                    onChange={(e) => {}}
                    tabIndex={1000}
                    value={range !== undefined ? `до ${range[1]}%` : `до 0%`}
                    onBlur={() => {}}
                />
            </div>
            <RangeInput
                className={cn(cls.slider_inp, [sliderInpCls])}
                min={min}
                max={max}
                steps={steps}
                setValue={setRange}
                value={range}
                minBetweenValue={minBetweenValue}
                visibleValueMax={(minValue) => {
                    return (
                        <Typography font="Inter-M" size={16} tag="h5">
                            {minValue}%
                        </Typography>
                    );
                }}
                visibleValueMin={(minValue) => {
                    return (
                        <Typography font="Inter-M" size={16} tag="h5">
                            {minValue}%
                        </Typography>
                    );
                }}
            />
        </>
    );
};

export { Content };
