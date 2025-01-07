import { FC } from "react";
import { TClassName } from "@/types";
import { ADVERTISEMENTS } from "./constants/advertisements";
import { AdvertisementsTableBodyItem } from "@/components/entities/AdvertisementsTableBodyItem";
import { cn } from "@/lib";
import { HomeTable } from "../HomeTable";
import { Typography } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const HomeAdvertisementsContent: FC<Props> = ({ className }) => {
    return (
        <HomeTable
            body={ADVERTISEMENTS.map(({ id, ...other }) => (
                <AdvertisementsTableBodyItem id={id} key={id} {...other} />
            ))}
            head={[
                <div className={cn(cls.head_advertisements)}>
                    <div className={cn(cls.square)} />
                    <Typography font="Inter-M" size={12}>
                        Объявления (120)
                    </Typography>
                    <ArrowIcon
                        color="var(--grey-600)"
                        className={cn(cls.icon)}
                    />
                </div>,
                "Статус",
                "Товар",
                "Кэшбек",
                "Выкупов",
                "Баланс",
                "В сделках",
                "Просмотры",
                "В избранном",
                "Выкупы",
                "CTR",
            ]}
            pagination={{
                pages: {
                    current: 1,
                    max: 10,
                },
            }}
            bodyCls={cn(cls.body)}
            bodyRowCls={cn(cls.body_row)}
            className={cn(cls.wrapper, [className])}
            headCls={cn(cls.head)}
            headCol={cn(cls.head_col)}
            headRowCls={cn(cls.head_row)}
            tableCls={cn(cls.table)}
            tableWrapperCls={cn(cls.table_wrapper)}
        />
    );
};

export { HomeAdvertisementsContent };
