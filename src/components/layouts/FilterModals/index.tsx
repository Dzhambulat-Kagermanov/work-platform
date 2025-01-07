"use client";
import { FC } from "react";
import { ModalCashback } from "@/components/widgets/Buyer/ModalCashback";
import { ModalPrice } from "@/components/widgets/shared/ModalPrice";
import { ModalSort } from "@/components/widgets/shared/ModalSort";
import { ModalComplexSort } from "@/components/widgets/shared/ModalComplexSort";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";

interface Props {}
const FilterModalsLayout: FC<Props> = ({}) => {
    const screen = useScreen();

    return (
        <>
            {screen > SM_MID ? (
                <>
                    <ModalPrice />
                    <ModalCashback />
                    <ModalSort />
                </>
            ) : (
                <ModalComplexSort />
            )}
        </>
    );
};

export { FilterModalsLayout };
