import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography, Input } from "@/components/ui";
import { EditAdvertisementCardInfo } from "@/components/widgets/Salesman/EditAdvertisementCardInfo";
import { EditAdvertisementCashback } from "@/components/widgets/Salesman/EditAdvertisementCashback";
import { EditAdvertisementEditArea } from "@/components/widgets/Salesman/EditAdvertisementEditArea";
import { EditAdvertisementRansomsQnt } from "@/components/widgets/Salesman/EditAdvertisementRansomsQnt";
import { EditAdvertisementResult } from "@/components/widgets/Salesman/EditAdvertisementResult";
import { EditAdvertisementFeature } from "@/components/widgets/Salesman/EditAdvertisementFeature";
import Link from "next/link";
import { ExpandArrowIcon } from "@/icons";
import { EditAdvertisementStatistic } from "@/components/widgets/Salesman/EditAdvertisementStatistic";
import cls from "./index.module.scss";
import { EditAdvertisementLimitUp } from "@/components/widgets/Salesman/EditAdvertisementLimitUp";
import { EditAdvertisementLimitLow } from "@/components/widgets/Salesman/EditAdvertisementLimitLow";

interface Props extends TClassName {}
const EditAdvertisementPage: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.main, [className])}>
            <div className={cn(cls.head)}>
                <Link
                    href={"/salesman?homePageType=advertisement"}
                    className={cn(cls.link)}
                >
                    <ExpandArrowIcon color="var(--black-200)" />
                </Link>
                <div className={cn(cls.text)}>
                    <Typography font="Inter-SB" size={30} tag="h1">
                        Детали объявления №1323
                    </Typography>
                    <Typography font="Inter-R" size={16} tag="h2">
                        Общая информация, статистика и редактирование
                    </Typography>
                </div>
            </div>
            <div className={cn(cls.content)}>
                <EditAdvertisementCardInfo className={cn(cls.card_wrapper)} />
                <EditAdvertisementStatistic className={cn(cls.statistic)} />
                <Input
                    wrapperCls={cn(cls.name_inp_wrapper)}
                    label="Название объявления (видите только вы)"
                />

                <EditAdvertisementCashback className={cn(cls.cashback)} />
                <EditAdvertisementEditArea className={cn(cls.edit_area)} />
                <EditAdvertisementFeature className={cn(cls.feature)} />
                <div className={cn(cls.ransoms_qnt_wrapper)}>
                    <EditAdvertisementRansomsQnt
                        className={cn(cls.ransoms_qnt)}
                    />
                    <EditAdvertisementRansomsQnt
                        className={cn(cls.ransoms_qnt)}
                    />
                </div>
                <EditAdvertisementResult className={cn(cls.result)} />
                <EditAdvertisementLimitUp className={cn(cls.limits_up_modal)} />
                <EditAdvertisementLimitLow
                    className={cn(cls.limit_low_modal)}
                />
            </div>
        </div>
    );
};

export { EditAdvertisementPage };
