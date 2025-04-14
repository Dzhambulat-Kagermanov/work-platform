"use client";
import React, { useState } from "react";
import { cn } from "@/lib";
import { Input, Typography } from "@/components/ui";
import { CreateAdvertisementCardInfo } from "@/components/widgets/Salesman/CreateAdvertisementCardInfo";
import cls from "./index.module.scss";
import { CreateAdvertisementPublishModal } from "@/components/widgets/Salesman/CreateAdvertisementPublishModal";
import { CreateAdvertisementCancelModal } from "@/components/widgets/Salesman/CreateAdvertisementCancelModal";
import { WbProduct } from "@/types/api/Product";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { CreateAdvertisementTemplateEditModal } from "@/components/widgets/Salesman/CreateAdvertisementTemplateEditModal";
import { EditAdvertisementCashback } from "@/components/widgets/Salesman/EditAdvertisementCashback";
import { EditAdvertisementEditArea } from "@/components/widgets/Salesman/EditAdvertisementEditArea";
import { EditAdvertisementRansomsQnt } from "@/components/widgets/Salesman/EditAdvertisementRansomsQnt";
import { EditAdvertisementResult } from "@/components/widgets/Salesman/EditAdvertisementResult";
import Ad from "@/types/api/Ad";
import { useUpdateAdv } from "@/hooks/api/seller/useUpdateAdv";
import { useQueryClient } from "@tanstack/react-query";
import { GET_ADV } from "@/hooks/api/seller/useGetAdv";
import { ADS_LIST_QUERY_KEY } from "@/hooks/api/seller/useGetAdsListQuery";

type EditAdvertisementPageProps = {
    currentAdv: Ad;
    product: WbProduct;
};

const EditAdvertisementPage: React.FC<EditAdvertisementPageProps> = ({
    currentAdv,
    product,
}) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { mutate: editAdvMutate, isPending: isAdvCreatePending } =
        useUpdateAdv();

    const [title, setTitle] = useState(currentAdv.name);
    const [cashback, setCashback] = useState(currentAdv.cashback_percentage);
    const [conditions, setConditions] = useState(currentAdv.order_conditions);
    const [instructions, setInstructions] = useState(
        currentAdv.redemption_instructions,
    );
    const [criteria, setCriteria] = useState(currentAdv.review_criteria);
    const [count, setCount] = useState(currentAdv.redemption_count);
    const [onePerUser, setOnePerUser] = useState(false);

    const [resData, setResData] = useState(null);

    const handleSubmit = () => {
        if (!product) {
            return;
        }
        const data = {
            id: currentAdv.id,
            is_archived: currentAdv.is_archived,
            product_id: product.id,
            name: title,
            cashback_percentage: cashback,
            order_conditions: conditions,
            redemption_instructions: instructions,
            review_criteria: criteria,
            one_per_user: onePerUser,
            redemption_count: count,
        };

        editAdvMutate(data, {
            onSuccess: () => {
                queryClient.refetchQueries({
                    queryKey: GET_ADV(currentAdv.id),
                });
                queryClient.refetchQueries({
                    queryKey: ADS_LIST_QUERY_KEY,
                });
                router.push(
                    `${ROUTES.SALESMAN.MAIN}?homePageType=advertisements`,
                );
            },
        });
    };

    // if (isLoading) {
    //     return <PageLoader />
    // }

    // if (isError || !product) {
    //     return <PageErrorStub />
    // }

    return (
        <div className={cn(cls.main)}>
            <div className={cls.head}>
                <Typography font="Inter-SB" size={30} tag="h1">
                    Создание объявления
                </Typography>
                <Typography font="Inter-R" size={16} tag="h2">
                    После успешной публикации ваш товар появится на сайте и
                    будет доступен для заказа
                </Typography>
            </div>
            <div className={cn(cls.content)}>
                <CreateAdvertisementCardInfo
                    product={product}
                    className={cn(cls.card_wrapper)}
                />
                {/* <EditAdvertisementStatistic className={cn(cls.statistic)} /> */}
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    wrapperCls={cn(cls.name_inp_wrapper)}
                    label="Название объявления (видите только вы)"
                />
                <EditAdvertisementCashback
                    cashBackPercentage={+currentAdv.cashback_percentage}
                    price={Number(product?.price ?? 0)}
                    cashback={cashback}
                    setCashback={setCashback}
                    className={cn(cls.cashback)}
                />
                <EditAdvertisementEditArea
                    conditions={conditions}
                    instructions={instructions}
                    criterias={criteria}
                    setInstructions={setInstructions}
                    setConditions={setConditions}
                    setCriterias={setCriteria}
                    className={cn(cls.edit_area)}
                />
                {/* <EditAdvertisementFeature
                    onePerUser={onePerUser}
                    setOnePerUser={setOnePerUser}
                /> */}
                <EditAdvertisementRansomsQnt
                    count={count}
                    setCount={setCount}
                    className={cn(cls.ransoms_qnt)}
                />
                <EditAdvertisementResult
                    currentRedemptions={currentAdv.redemption_count}
                    disabled={isAdvCreatePending}
                    handleSubmit={handleSubmit}
                    price={+product.price}
                    count={count}
                    cashback={cashback}
                    className={cn(cls.result)}
                />
                <CreateAdvertisementPublishModal
                    submitData={resData}
                    className={cn(cls.publish_modal)}
                />
                <CreateAdvertisementCancelModal
                    className={cn(cls.cancel_modal)}
                />
                <CreateAdvertisementTemplateEditModal />
            </div>
        </div>
    );
};

export default EditAdvertisementPage;
