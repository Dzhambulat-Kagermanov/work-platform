"use client";
import React, { useState } from "react";
import { cn } from "@/lib";
import { Input, Typography } from "@/components/ui";
import { CreateAdvertisementCardInfo } from "@/components/widgets/Salesman/CreateAdvertisementCardInfo";
import { CreateAdvertisementCashback } from "@/components/widgets/Salesman/CreateAdvertisementCashback";
import { CreateAdvertisementEditArea } from "@/components/widgets/Salesman/CreateAdvertisementEditArea";
import { CreateAdvertisementRansomsQnt } from "@/components/widgets/Salesman/CreateAdvertisementRansomsQnt";
import { CreateAdvertisementResult } from "@/components/widgets/Salesman/CreateAdvertisementResult";
import cls from "./create-edit-advertisement-page.module.scss";
import { CreateAdvertisementPublishModal } from "@/components/widgets/Salesman/CreateAdvertisementPublishModal";
import { CreateAdvertisementCancelModal } from "@/components/widgets/Salesman/CreateAdvertisementCancelModal";
import { useSearchParams } from "next/navigation";
import { EditAdvertisementStatistic } from "@/components/widgets/Salesman/EditAdvertisementStatistic";
import { EditAdvertisementFeature } from "@/components/widgets/Salesman/EditAdvertisementFeature";
import { WbProduct } from "@/types/api/Product";

type CreateEditAdvertisementPageProps = {
    currentAdv?: any;
    product: WbProduct;
};

const CreateEditAdvertisementPage: React.FC<
    CreateEditAdvertisementPageProps
> = ({ currentAdv, product }) => {
    const searchParams = useSearchParams();

    const selectedWbItem = searchParams.get("selectedWbItem");

    const [title, setTitle] = useState("");
    const [cashback, setCashback] = useState("");
    const [conditions, setConditions] = useState("");
    const [instructions, setInstructions] = useState("");
    const [criterias, setCriterias] = useState("");
    const [count, setCount] = useState(0);

    return (
        <div className={cn(cls.main)}>
            <Typography font="Inter-SB" size={30} tag="h1">
                Создание объявления
            </Typography>
            <Typography font="Inter-R" size={16} tag="h2">
                После успешной публикации ваш товар появится на сайте и будет
                доступен для заказа
            </Typography>
            <div className={cn(cls.content)}>
                <CreateAdvertisementCardInfo className={cn(cls.card_wrapper)} />
                <EditAdvertisementStatistic className={cn(cls.statistic)} />
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    wrapperCls={cn(cls.name_inp_wrapper)}
                    label="Название объявления (видите только вы)"
                />
                <CreateAdvertisementCashback
                    setCashback={setCashback}
                    className={cn(cls.cashback)}
                />
                <CreateAdvertisementEditArea
                    conditions={conditions}
                    instructions={instructions}
                    criterias={criterias}
                    setInstructions={setInstructions}
                    setConditions={setConditions}
                    setCriterias={setCriterias}
                    className={cn(cls.edit_area)}
                />
                <EditAdvertisementFeature />
                <CreateAdvertisementRansomsQnt
                    count={count}
                    setCount={setCount}
                    className={cn(cls.ransoms_qnt)}
                />
                <CreateAdvertisementResult
                    price={800}
                    count={count}
                    cashback={cashback}
                    className={cn(cls.result)}
                />
                <CreateAdvertisementPublishModal
                    className={cn(cls.publish_modal)}
                />
                <CreateAdvertisementCancelModal
                    className={cn(cls.cancel_modal)}
                />
            </div>
        </div>
    );
};

export default CreateEditAdvertisementPage;
