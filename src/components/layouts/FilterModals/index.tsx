"use client";
import { FC } from "react";
import { ModalCashback } from "@/components/widgets/Buyer/ModalCashback";
import { ModalPrice } from "@/components/widgets/shared/ModalPrice";
import { ModalSort } from "@/components/widgets/shared/ModalSort";
import { ModalComplexSort } from "@/components/widgets/shared/ModalComplexSort";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";

export interface FilterModalsLayoutProps {
    pageType: "home" | "category";
}
const FilterModalsLayout: FC<FilterModalsLayoutProps> = ({ pageType }) => {
    const screen = useScreen();

    return (
        <>
            {screen > SM_MID ? (
                <>
                    <ModalPrice pageType={pageType} />
                    <ModalCashback pageType={pageType} />
                    <ModalSort pageType={pageType} />
                </>
            ) : (
                <ModalComplexSort pageType={pageType} />
            )}
        </>
    );
};

export { FilterModalsLayout };
