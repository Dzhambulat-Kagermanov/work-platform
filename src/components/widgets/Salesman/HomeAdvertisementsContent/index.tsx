import { FC } from "react";
import { TClassName } from "@/types";
import { ADVERTISEMENTS } from "./constants/advertisements";
import { AdvertisementsTableBodyItem } from "@/components/entities/AdvertisementsTableBodyItem";
import { cn } from "@/lib";
import { HomeTable } from "../HomeTable";
import { Typography } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { useGetAdsListQuery } from "@/hooks/api/seller";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { usePagination } from "@/hooks/client";

interface Props extends TClassName {}
const HomeAdvertisementsContent: FC<Props> = ({ className }) => {
    const { pagination, setPagination } = usePagination();

    const { data: adveritsements, isLoading, isError } = useGetAdsListQuery();

    if (isLoading) {
        return <PageLoader />;
    }

    if (!adveritsements || isError) {
        return <PageErrorStub />;
    }

    if (!adveritsements.data.length) {
        return <PageErrorStub text="Объявления не найдены" />;
    }

    return (
        <HomeTable
            body={adveritsements.data.map((item) => (
                <AdvertisementsTableBodyItem
                    item={item}
                    key={`${item.name}${item.id}`}
                />
            ))}
            head={[
                <div className={cn(cls.head_advertisements)}>
                    <Typography font="Inter-M" size={12}>
                        Объявления {adveritsements?.data.length}
                    </Typography>
                </div>,
                "Статус",
                "Товар",
                "Кэшбек",
                "Выкупов",
                "Баланс",
                "В сделках",
                "Просмотры",
                "В избранном",
                "CR",
            ]}
            pagination={pagination}
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
