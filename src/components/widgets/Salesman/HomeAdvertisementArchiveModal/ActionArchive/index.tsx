import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { useModalStore, useSellerStore } from "@/store";
import { TModalStep } from "..";
import { SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from "@/constants";
import cls from "./index.module.scss";
import { useArchiveAdsMutation } from "@/hooks/api/seller";
import { adsIdsSelector } from "@/store/useSellerStore";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
}
const ActionArchive: FC<Props> = ({ className, setStep }) => {
    const hideModal = useModalStore((state) => state.hideModal);

    const selectedAds = useSellerStore(adsIdsSelector);
    const { mutate: archiveAdsMutate, isPending: archiveAdsPending } =
        useArchiveAdsMutation();

    const handleConfirm: MouseEventHandler = () => {
        archiveAdsMutate(
            {
                ad_ids: selectedAds,
            },
            {
                onSuccess: () => {
                    setStep("success-archive");
                },
            },
        );
    };
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Архивировать объявление?
            </Typography>
            <Typography font="Inter-R" size={14} tag="h4">
                После архивации объявления вы сможете только смотреть
                статистику. Запустить заново его будет невозможно.
            </Typography>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="outline"
                    disabled={archiveAdsPending}
                    className={cn(cls.btn)}
                    onClick={handleCancel}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    theme="fill"
                    disabled={archiveAdsPending}
                    className={cn(cls.btn)}
                    onClick={handleConfirm}
                >
                    Подтвердить
                </Button>
            </div>
        </div>
    );
};

export { ActionArchive };
