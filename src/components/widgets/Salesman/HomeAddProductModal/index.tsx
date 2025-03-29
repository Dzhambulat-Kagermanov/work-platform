"use client";
import { FC, useState } from "react";
import { ModalBase } from "@/components/ui";
import { SALESMAN_ADD_PRODUCT_MODAL } from "@/constants";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { AddProduct } from "./AddProduct";
import { FailAddProduct } from "./FailAddProduct";
import { AddShop } from "./AddShop";
import { FailAddShop } from "./FailAddShop";
import { AddProductConfirmation } from "./AddProductConfirmation";
import cls from "./index.module.scss";
import { WbProduct } from "@/types/api/Product";
import { Shop } from "@/types/api";
import { useModalStore } from "@/store";

export type ProductInfo = { product: WbProduct; shop: Shop } | null;

export type TModalStep =
    | "failAddShop"
    | "failAddProduct"
    | "addShop"
    | "addProduct"
    | "addProductConfirmation"
    | null;

interface Props extends TClassName {}
const HomeAddProductModal: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);

    const [step, setStep] = useState<TModalStep>("addProduct");
    const [art, setArt] = useState("");
    const [info, setInfo] = useState<ProductInfo>(null);

    const closeModal = () => {
        hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };

    return (
        <ModalBase
            onClose={() => {
                setStep(null);
                setArt("");
                setInfo(null);
            }}
            slug={SALESMAN_ADD_PRODUCT_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                {step === "addProduct" || step === null ? (
                    <AddProduct
                        art={art}
                        setArt={setArt}
                        setInfo={setInfo}
                        className={cn(cls.add_product)}
                        setStep={setStep}
                        closeModal={closeModal}
                    />
                ) : step === "failAddProduct" ? (
                    <FailAddProduct
                        className={cn(cls.fail_add_product)}
                        closeModal={closeModal}
                        setStep={setStep}
                    />
                ) : step === "addShop" ? (
                    <AddShop
                        info={info}
                        className={cn(cls.add_shop)}
                        setStep={setStep}
                    />
                ) : step === "failAddShop" ? (
                    <FailAddShop
                        className={cn(cls.fail_add_shop)}
                        closeModal={closeModal}
                    />
                ) : (
                    <AddProductConfirmation
                        info={info}
                        className={cn(cls.add_product_confirm)}
                        setStep={setStep}
                        closeModal={closeModal}
                    />
                )}
            </div>
        </ModalBase>
    );
};

export { HomeAddProductModal };
