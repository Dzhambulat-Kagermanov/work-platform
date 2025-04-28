import { Timer, Typography } from "@/components/ui"
import { EnChatStatuses } from '@/types/api/Chat'
import { Order } from "@/types/api"
import { ReactNode } from "react"
import { formatDistanceToNow, differenceInSeconds } from 'date-fns'
import { ru } from 'date-fns/locale'

export const returnContent = (
    type?: EnChatStatuses,
    orderData?: Order,
): {
    contentForDescription: ReactNode
    contentForPlaque: ReactNode
} => {
    let contentForPlaque: ReactNode = null
    let contentForDescription: ReactNode = null
    switch (type) {
        case EnChatStatuses.pending:
            // Расчет оставшегося времени на основе created_at
            const calculateRemainingSeconds = (): number => {
                if (!orderData?.created_at) return 1800; // 30 минут по умолчанию если нет created_at
                
                const createdDate = new Date(orderData.created_at);
                const now = new Date();
                
                // 30 минут (1800 секунд) минус прошедшее время с момента создания
                const timePassedSec = differenceInSeconds(now, createdDate);
                const remainingSec = Math.max(0, 1800 - timePassedSec);
                
                return remainingSec;
            };

            contentForPlaque = (
                <Typography font="Inter-M" size={12} tag="h5">
                    Ожидание заказа{' '}
                    <time>
                        <Timer second={calculateRemainingSeconds()} format="MM:SS" />
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
