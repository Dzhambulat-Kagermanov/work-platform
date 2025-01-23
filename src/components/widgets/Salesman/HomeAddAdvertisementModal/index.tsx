"use client";
import { FC, MouseEventHandler, useState } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase } from "@/components/ui";
import { cn } from "@/lib";
import { ROUTES, SALESMAN_ADD_ADVERTISEMENT_MODAL } from "@/constants";
import { Head } from "./Head";
import { Content } from "./Content";
import { useRouter } from "next/navigation";
import cls from "./index.module.scss";

export type TSalesmanSelectProductProps = {
    id: number;
    image: string;
    title: string;
    number: string;
};

interface Props extends TClassName {}
const HomeAddAdvertisementModal: FC<Props> = ({ className }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const router = useRouter();
    const handleClick: MouseEventHandler = () => {
        if (!selectedItem) {
            return;
        }

        router.push(
            `${ROUTES.SALESMAN.CREATE_ADVERTISEMENTS}?selectedWbItem=${selectedItem}`,
        );
    };
    return (
        <ModalBase
            className={cn(cls.wrapper, [className])}
            slug={SALESMAN_ADD_ADVERTISEMENT_MODAL}
        >
            <div className={cn(cls.content)}>
                <Head className={cn(cls.head)} />
                <Content
                    className={cn(cls.subcontent)}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
                <Button
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={handleClick}
                    wFull
                    disabled={!selectedItem}
                >
                    Создать объявление
                </Button>
            </div>
        </ModalBase>
    );
};

export { HomeAddAdvertisementModal };
