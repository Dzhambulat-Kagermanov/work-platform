"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase } from "@/components/ui";
import { CASHBACK_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Content } from "./Content";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ModalCashback: FC<Props> = ({ className }) => {
    const MIN = 0;
    const MAX = 100;
    const STEPS = 100;

    const MIN_BETWEEN_PERCENT = 20;
    const MIN_BETWEEN_VALUE = Math.round(MAX / STEPS) * MIN_BETWEEN_PERCENT;

    const [range, setRange] = useState<[number, number]>([MIN, MAX]);

    return (
        <ModalBase
            slug={CASHBACK_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Content
                    max={MAX}
                    min={MIN}
                    minBetweenValue={MIN_BETWEEN_VALUE}
                    range={range}
                    setRange={setRange}
                    steps={STEPS}
                />
                <Button theme="fill" size="mid" className={cn(cls.apply_btn)}>
                    Применить
                </Button>
            </div>
        </ModalBase>
    );
};

export { ModalCashback };
