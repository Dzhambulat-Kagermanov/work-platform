import { FC, useState } from "react";
import { Checkbox, DiscountPlaque, Toggle, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { Product } from "@/types/api";
import { dateParserHandler } from "@/handlers";
import { useSellerStore } from "@/store";
import { addAdIdSelector, adsIdsSelector, removeAdIdSelector } from "@/store/useSellerStore";

interface Props {
    columnCls?: string;
    item: Product;
}
const AdvertisementsTableBodyItem: FC<Props> = ({ item, columnCls }) => {

    const [date] = useState(dateParserHandler(item.created_at));

    const selectedAds = useSellerStore(adsIdsSelector);
    const removeSelectedAd = useSellerStore(removeAdIdSelector);
    const addSelectedAd = useSellerStore(addAdIdSelector);
    const checked = selectedAds.some((el) => el === item.id);

    const handeChange = () => {

        if (checked) {
            removeSelectedAd(item.id);
            return;
        }

        addSelectedAd(item.id);

    }

    return (
        <>
            {/* ОБЪЯВЛЕНИЕ */}
            <td className={cn(cls.column, [cls.advertisement, columnCls])}>
                <div className={cn(cls.advertisement_content)}>
                    <Checkbox
                        className={cn(cls.checkbox)}
                        checked={checked}
                        onChange={handeChange}
                    />
                    <div className={cn(cls.info)}>
                        <Typography font="Inter-M" tag="h2" size={14}>
                            {item.name}
                        </Typography>
                        <Typography font="Inter-R" tag="time" size={14}>
                            {date}
                        </Typography>
                    </div>
                </div>
            </td>
            {/* СТАТУС */}
            <td className={cn(cls.column, [cls.status, columnCls])}>
                <Toggle
                    className={cn(cls.toggle)}
                    defaultChecked={!!item.status}
                />
            </td>
            {/* ТОВАР */}
            <td className={cn(cls.column, [cls.product, columnCls])}>
                <div className={cn(cls.product_content)}>
                    {item?.product?.images && item.product?.images?.length ? (
                        <img
                            src={item.product.images[0]}
                            alt="product"
                            className="w-10 h-10 min-w-10 object-cover"
                        />
                    ) : (
                        <></>
                    )}
                    <div className={cn(cls.content)}>
                        <Typography font="Inter-R" tag="h2" size={14}>
                            {item.name}
                        </Typography>
                        <Typography font="Inter-R" tag="h3" size={14}>
                            {item.product?.wb_id}
                        </Typography>
                    </div>
                </div>
            </td>
            {/* КЭШБЕК */}
            <td className={cn(cls.column, [cls.cashback, columnCls])}>
                <DiscountPlaque customContent={(num) => `${num}%`}>
                    {item.cashback_percentage}
                </DiscountPlaque>
                <DiscountPlaque
                    customContent={(num) => `${num} Р`}
                    customColor={"blue"}
                >
                    {item.price_without_cashback - item.price_without_cashback}
                </DiscountPlaque>
            </td>
            {/* ВЫКУПЫ */}
            <td className={cn(cls.column, [cls.ransoms, columnCls])}>
                <Typography font="Inter-R" size={14} tag="h4">
                    {item.completed_buybacks_count ?? 0}шт. /{" "}
                    {item.redemption_count ?? 0}шт.
                </Typography>
            </td>
            {/* БАЛАНС */}
            <td className={cn(cls.column, [cls.balance, columnCls])}>
                <Typography font="Inter-R" size={14}>
                    {item.balance} P
                </Typography>
            </td>
            {/* В ТРАНЗАКЦИЯХ */}
            <td className={cn(cls.column, [cls.in_transactions, columnCls])}>
                <Typography font="Inter-R" size={14}>
                    {5} P
                </Typography>
            </td>
            {/* ПРОСМОТРЫ */}
            <td className={cn(cls.column, [cls.view, columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.views_count ?? 0}
                </Typography>
            </td>
            {/* В ИЗБРАННОМ */}
            <td className={cn(cls.column, [cls.in_favorite, columnCls])}>
                <Typography font="Inter-R" size={14}>
                    {item.in_favorite ?? 0}
                </Typography>
            </td>
            {/* CTR */}
            <td className={cn(cls.column, [cls.ctr, columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.cr ?? 0}%
                </Typography>
            </td>
        </>
    );
};

export { AdvertisementsTableBodyItem };
