import { FC, MouseEvent, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { ModalBasePlaque } from "@/components/ui/ModalBasePlaque";
import { COMPLEX_SORT_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Button, Container } from "@/components/ui";
import { Content as PriceContent } from "../ModalPrice/Content";
import { Content as CashbackContent } from "../../Buyer/ModalCashback/Content";
import { SortContent } from "./SortContent";
import cls from "./index.module.scss";
import { useFiltersStore, useModalStore } from "@/store";
import { hideModalSelector } from "@/store/useModalStore";
import {
    categoryPageFiltersSelector,
    mainPageFiltersSelector,
    mainPageSetFiltersSelector,
    SortType,
} from "@/store/useFiltersStore";
import { FilterModalsLayoutProps } from "@/components/layouts/FilterModals";
import toast from "react-hot-toast";

const MIN = 0;
const MAX = 100;
const STEPS = 100;
const MIN_BETWEEN_PERCENT = 20;
const MIN_BETWEEN_VALUE = Math.round(MAX / STEPS) * MIN_BETWEEN_PERCENT;

interface Props extends TClassName, Pick<FilterModalsLayoutProps, "pageType"> {}
const ModalComplexSort: FC<Props> = ({ className, pageType }) => {
    const hideModal = useModalStore(hideModalSelector);

    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const setMainPageFilters = useFiltersStore(mainPageSetFiltersSelector);
    const categoryPageFilters = useFiltersStore(categoryPageFiltersSelector);
    const setCategoryPageFilters = useFiltersStore(mainPageSetFiltersSelector);

    const [sort, setSort] = useState<SortType>("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const [range, setRange] = useState<[number, number]>([MIN, MAX]);

    const handleApply = () => {
        if (priceFrom && priceTo) {
            const priceFromNumber = Number(priceFrom);
            const priceToNumber = Number(priceTo);

            if (isNaN(priceFromNumber) || isNaN(priceToNumber)) {
                toast.error("Цены введены некорректно");
                return;
            }

            if (
                priceFromNumber &&
                priceToNumber &&
                priceFromNumber > priceToNumber
            ) {
                toast.error(
                    "Начальная цена поиска должна быть меньше конечной",
                );
                return;
            }
        }

        const data = {
            priceFrom: priceFrom.trim(),
            priceTo: priceTo.trim(),
            cashbackFrom: range[0],
            cashbackTo: range[1],
            sortBy: sort,
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

        hideModal({ slug: COMPLEX_SORT_MODAL });
    };

    useEffect(() => {
        if (pageType === "home") {
            setPriceFrom(mainPageFilters.priceFrom);
            setPriceTo(mainPageFilters.priceTo);
            setRange([
                mainPageFilters.cashbackFrom || MIN,
                mainPageFilters.cashbackTo || MAX,
            ]);
            setSort(mainPageFilters.sortBy);
        }

        if (pageType === "category") {
            setPriceFrom(categoryPageFilters.priceFrom);
            setPriceTo(categoryPageFilters.priceTo);
            setRange([
                categoryPageFilters.cashbackFrom || MIN,
                categoryPageFilters.cashbackTo || MAX,
            ]);
            setSort(categoryPageFilters.sortBy);
        }
    }, []);

    return (
        <ModalBasePlaque
            slug={COMPLEX_SORT_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <Container className={cn(cls.content)}>
                <SortContent
                    sort={sort}
                    setSort={setSort}
                    className={cn(cls.subcontent, [cls.sort_content])}
                />
                <div className={cn(cls.subcontent, [cls.price_content])}>
                    <PriceContent
                        priceFrom={priceFrom}
                        setPriceFrom={setPriceFrom}
                        priceTo={priceTo}
                        setPriceTo={setPriceTo}
                    />
                </div>
                <div className={cn(cls.subcontent, [cls.cashback_content])}>
                    <CashbackContent
                        sliderInpCls={cn(cls.slider_inp)}
                        min={MIN}
                        max={MAX}
                        minBetweenValue={MIN_BETWEEN_VALUE}
                        range={range}
                        setRange={setRange}
                        steps={STEPS}
                    />
                </div>
                <Button
                    theme="fill"
                    className={cn(cls.apply_btn)}
                    onClick={handleApply}
                >
                    Применить
                </Button>
            </Container>
        </ModalBasePlaque>
    );
};

export { ModalComplexSort };
