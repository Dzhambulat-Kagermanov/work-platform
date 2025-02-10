import { FC, useEffect, useState } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase } from "@/components/ui";
import { PRICE_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Content } from "./Content";
import cls from "./index.module.scss";
import { useFiltersStore, useModalStore } from "@/store";
import {
    categoryPageFiltersSelector,
    categoryPageSetFiltersSelector,
    mainPageFiltersSelector,
    mainPageSetFiltersSelector,
} from "@/store/useFiltersStore";
import { FilterModalsLayoutProps } from "@/components/layouts/FilterModals";
import { hideModalSelector } from "@/store/useModalStore";
import toast from "react-hot-toast";

interface Props extends TClassName, Pick<FilterModalsLayoutProps, "pageType"> {}
const ModalPrice: FC<Props> = ({ className, pageType }) => {
    const hideModal = useModalStore(hideModalSelector);

    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const setMainPageFilters = useFiltersStore(mainPageSetFiltersSelector);
    const categoryPageFilters = useFiltersStore(categoryPageFiltersSelector);
    const setCategoryPageFilters = useFiltersStore(
        categoryPageSetFiltersSelector,
    );

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    useEffect(() => {
        if (pageType === "home") {
            setPriceFrom(mainPageFilters.priceFrom);
            setPriceTo(mainPageFilters.priceTo);
        }

        if (pageType === "category") {
            setPriceFrom(categoryPageFilters.priceFrom);
            setPriceTo(categoryPageFilters.priceTo);
        }
    }, []);

    const applyPrice = () => {
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
            toast.error("Начальная цена поиска должна быть меньше конечной");
            return;
        }

        const data = {
            priceFrom: priceFrom.trim(),
            priceTo: priceTo.trim(),
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

        hideModal({ slug: PRICE_MODAL });
    };

    return (
        <ModalBase slug={PRICE_MODAL} className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.content)}>
                <Content
                    priceFrom={priceFrom}
                    setPriceFrom={setPriceFrom}
                    priceTo={priceTo}
                    setPriceTo={setPriceTo}
                />
                <Button
                    onClick={applyPrice}
                    size="mid"
                    theme="fill"
                    className={cn(cls.apply_btn)}
                >
                    Применить
                </Button>
            </div>
        </ModalBase>
    );
};

export { ModalPrice };
