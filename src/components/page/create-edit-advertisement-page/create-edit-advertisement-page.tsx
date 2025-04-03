'use client'
import React, { useState } from "react"
import { cn } from "@/lib"
import { Input, Typography } from "@/components/ui"
import { CreateAdvertisementCardInfo } from "@/components/widgets/Salesman/CreateAdvertisementCardInfo"
import { CreateAdvertisementCashback } from "@/components/widgets/Salesman/CreateAdvertisementCashback"
import { CreateAdvertisementEditArea } from "@/components/widgets/Salesman/CreateAdvertisementEditArea"
import { CreateAdvertisementRansomsQnt } from "@/components/widgets/Salesman/CreateAdvertisementRansomsQnt"
import { CreateAdvertisementResult } from "@/components/widgets/Salesman/CreateAdvertisementResult"
import cls from "./create-edit-advertisement-page.module.scss"
import { CreateAdvertisementPublishModal } from "@/components/widgets/Salesman/CreateAdvertisementPublishModal"
import { CreateAdvertisementCancelModal } from "@/components/widgets/Salesman/CreateAdvertisementCancelModal"
import { EditAdvertisementFeature } from "@/components/widgets/Salesman/EditAdvertisementFeature"
import { useCreateAdvMutation, useGetWbProductQuery } from "@/hooks/api/seller"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/constants"
import { PageLoader } from "@/components/ui/loaders"
import { PageErrorStub } from "@/components/ui/page-error-stub"

type CreateEditAdvertisementPageProps = {
    currentAdv?: any
    selectedWbItem: string
}

const CreateEditAdvertisementPage: React.FC<
    CreateEditAdvertisementPageProps
> = ({ currentAdv, selectedWbItem }) => {
        const {
        data: product,
        isLoading,
        isError,
    } = useGetWbProductQuery(selectedWbItem)
    const router = useRouter()
    const { mutate: createAdvMutate, isPending: isAdvCreatePending } =
        useCreateAdvMutation()

    const [title, setTitle] = useState("")
    const [cashback, setCashback] = useState("")
    const [conditions, setConditions] = useState("")
    const [instructions, setInstructions] = useState("")
    const [criterias, setCriterias] = useState("")
    const [count, setCount] = useState(0)
    const [onePerUser, setOnePerUser] = useState(false)

    const [resData, setResData] = useState(null)

    const handleSubmit = () => {
        if (!product) {
            return;
        }
        const data = {
            product_id: product.id,
            name: title,
            cashback_percentage: Number(cashback),
            order_conditions: conditions,
            redemption_instructions: instructions,
            review_criteria: criterias,
            one_per_user: onePerUser,
            redemption_count: count,
        }

        if (!currentAdv) {
            createAdvMutate(data, {
                onSuccess: () => {
                    router.push(`${ROUTES.SALESMAN.MAIN}?homePageType=advertisements`)
                },
            })

            return
        }
    }

    if (isLoading) {
        return <PageLoader />
    }

    if (isError || !product) {
        return <PageErrorStub />
    }

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
                <CreateAdvertisementCashback
                    price={Number(product?.price ?? 0)}
                    cashback={cashback}
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
                {/* <EditAdvertisementFeature
                    onePerUser={onePerUser}
                    setOnePerUser={setOnePerUser}
                /> */}
                <CreateAdvertisementRansomsQnt
                    count={count}
                    setCount={setCount}
                    className={cn(cls.ransoms_qnt)}
                />
                <CreateAdvertisementResult
                    disabled={isAdvCreatePending}
                    handleSubmit={handleSubmit}
                    price={800}
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
            </div>
        </div>
    )
}

export default CreateEditAdvertisementPage
