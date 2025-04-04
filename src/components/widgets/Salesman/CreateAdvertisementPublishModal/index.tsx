"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import { CopyIcon } from "@/icons";
import { useRouter } from "next/navigation";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";

interface Props extends TClassName {
    submitData: any;
}
const CreateAdvertisementPublishModal: FC<Props> = ({
    className,
    submitData,
}) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const router = useRouter();
    const LINK = "www.wbdiscount.pro/99493903020";
    const handleCopy: MouseEventHandler = () => {
        navigator.clipboard.writeText(LINK);
    };
    const handleNext = () => {
        console.log(1);
        hideModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL });
        router.push("/salesman?homePageType=advertisement");
    };

    return (
        <ModalBase
            slug={SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Image
                    src={"/images/shared/actions/success.svg"}
                    alt="Успех"
                    width={48}
                    height={48}
                />
                <Typography font="Inter-SB" size={18} tag="h2">
                    Ваше объявление опубликовано!
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    Совет 1: Перейдите в карточку и проверьте корректность
                    данных.
                    <br />
                    <br />
                    Совет 2: Рекламируйте ссылку самостоятельно, если хотите
                    получить выкупы быстрее и больше. А мы отразим в статистике
                    сколько покупателей пришло с нашей витрины, а сколько купили
                    по прямой ссылке с вашей рекламы.
                </Typography>
                <div className={cn(cls.link_wrapper)}>
                    <Typography font="Inter-M" size={14} tag="h2">
                        Ссылка
                    </Typography>
                    <div className={cn(cls.link)}>
                        <div className={cn(cls.link_content)}>
                            <Typography font="Inter-R" size={16} tag="h3">
                                {LINK}
                            </Typography>
                        </div>
                        <button className={cn(cls.btn)} onClick={handleCopy}>
                            <CopyIcon
                                className={cn(cls.icon)}
                                color="var(--grey-600)"
                            />
                        </button>
                    </div>
                </div>
                <Button
                    theme="fill"
                    wFull
                    size="mid"
                    onClick={handleNext}
                    className={cn(cls.next_btn)}
                >
                    Далее
                </Button>
            </div>
        </ModalBase>
    );
};

export { CreateAdvertisementPublishModal };
