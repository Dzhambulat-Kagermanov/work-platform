import { Timer, Typography } from "@/components/ui"
import { EnChatStatuses } from '@/types/api/Chat'
import { ReactNode } from "react"

export const returnContent = (
    type?: EnChatStatuses,
): {
    contentForDescription: ReactNode
    contentForPlaque: ReactNode
} => {
    let contentForPlaque: ReactNode = null
    let contentForDescription: ReactNode = null
    switch (type) {
        case EnChatStatuses.pending:
            contentForPlaque = (
                <Typography font="Inter-M" size={12} tag="h5">
                    Ожидание заказа{' '}
                    <time>
                        <Timer second={1800} format="MM:SS" />
                    </time>
                </Typography>
            )
            contentForDescription = (
                <Typography font="Inter-M" size={14}>
                    У вас есть 30 минут, чтобы сделать заказ по инструкции
                    продавца, иначе заказ будет отменен.
                </Typography>
            )
            break
        case EnChatStatuses.awaiting_receipt:
            contentForPlaque = (
                <Typography font="Inter-M" size={12} tag="h5">
                    Ожидание получения товара
                </Typography>
            )
            contentForDescription = (
                <>
                    <Typography font="Inter-M" size={14}>
                        У покупателя есть 10 дней, чтобы получить товар и
                        выполнить ваши условия или заказ будет отменен
                        автоматически.
                    </Typography>
                    <Typography font="Inter-SB" size={20} tag="time">
                        <Timer second={864000} format={"DD:HH:MM:SS"} />
                    </Typography>
                </>
            )
            break
        case EnChatStatuses.on_confirmation:
            contentForPlaque = (
                <Typography font="Inter-M" size={12} tag="h5">
                    На подтверждении продавцом
                </Typography>
            )
            contentForDescription = (
                <>
                    <Typography font="Inter-M" size={14}>
                        Ожидание вашего подтверждения материалов покупателя
                    </Typography>
                    <Typography font="Inter-SB" tag="time" size={20}>
                        <Timer format="HH:MM:SS" second={259200} />
                    </Typography>
                </>
            )
            break
        case EnChatStatuses.cashback_received:
            contentForPlaque = (
                <Typography font="Inter-M" size={12} tag="h5">
                    Кэшбек получен
                </Typography>
            )
            contentForDescription = (
                <Typography font="Inter-M" size={14}>
                    Кэшбек в размере 300Р был зачислен на баланс покупателя
                </Typography>
            )
            break
        default:
    }
    return {
        contentForDescription,
        contentForPlaque,
    }
}
