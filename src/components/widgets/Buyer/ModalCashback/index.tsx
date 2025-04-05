import { FC, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase } from "@/components/ui";
import { CASHBACK_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Content } from "./Content";
import cls from "./index.module.scss";
import { FilterModalsLayoutProps } from "@/components/layouts/FilterModals";
import { useFiltersStore, useModalStore } from "@/store";
import {
    categoryPageFiltersSelector,
    categoryPageSetFiltersSelector,
    mainPageFiltersSelector,
    mainPageSetFiltersSelector,
} from "@/store/useFiltersStore";
import { hideModalSelector } from "@/store/useModalStore";

const MIN = 0;
const MAX = 100;
const STEPS = 100;

const MIN_BETWEEN_PERCENT = 20;
const MIN_BETWEEN_VALUE = Math.round(MAX / STEPS) * MIN_BETWEEN_PERCENT;

interface Props extends TClassName, Pick<FilterModalsLayoutProps, "pageType"> {}
const ModalCashback: FC<Props> = ({ className, pageType }) => {
    const hideModal = useModalStore(hideModalSelector);

    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const setMainPageFilters = useFiltersStore(mainPageSetFiltersSelector);

    const categoryPageFilters = useFiltersStore(categoryPageFiltersSelector);
    const setCategoryPageFilters = useFiltersStore(
        categoryPageSetFiltersSelector,
    );

    const [range, setRange] = useState<[number, number]>([MIN, MAX]);

    const applyCashback = () => {
        const data = {
            cashbackFrom: range[0],
            cashbackTo: range[1],
        };
        if (pageType === "home") {
            setMainPageFilters({
                ...mainPageFilters,
                ...data,
            });
        }

        if (pageType === "category") {
            setCategoryPageFilters({
                ...categoryPageFilters,
                ...data,
            });
        }

        hideModal({ slug: CASHBACK_MODAL });
    };

    useEffect(() => {
        if (pageType === "home") {
            setRange([
                mainPageFilters.cashbackFrom || MIN,
                mainPageFilters.cashbackTo || MAX,
            ]);
        }

        if (pageType === "category") {
            setRange([
                categoryPageFilters.cashbackFrom || MIN,
                categoryPageFilters.cashbackTo || MAX,
            ]);
        }
    }, []);

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
                <Button
                    onClick={applyCashback}
                    theme="fill"
                    size="mid"
                    className={cn(cls.apply_btn)}
                >
                    Применить
                </Button>
            </div>
        </ModalBase>
    );
};

export { ModalCashback };
