import { FC, useState } from "react";
import { Checkbox, Toggle, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { WbProduct } from "@/types/api/Product";
import { useSellerStore } from "@/store";
import {
    addProductIdSelector,
    productIdsSelector,
    removeProductIdSelector,
} from "@/store/useSellerStore";
import { useStopProductsMutation } from "@/hooks/api/seller";

interface Props {
    columnCls?: string;
    item: WbProduct;
}
const ProductsTableBodyItem: FC<Props> = ({ item, columnCls }) => {


    const { mutate: stopProductsMutate, isPending: stopProductsPending } =
        useStopProductsMutation();

    const [toggle, setToggle] = useState(!item.is_archived);

    const selectedProducts = useSellerStore(productIdsSelector);
    const removeSelectedProduct = useSellerStore(removeProductIdSelector);
    const addSelectedProduct = useSellerStore(addProductIdSelector);

    const checked = selectedProducts.some((el) => el === item.id);

    const pending = stopProductsPending;

    const handeChange = () => {
        if (checked) {
            removeSelectedProduct(item.id);
            return;
        }

        addSelectedProduct(item.id);
    };

    const handleToggle = () => {

        if (pending) {
            return;
        }

        if (toggle) {
            return;
        }

        stopProductsMutate({
            product_ids: [item.id],
        }, {
            onSuccess: () => {
                setToggle(!toggle);
            }
        })

    }

    return (
        <>
            <td className={cn(cls.column, [cls.product, columnCls])}>
                <Checkbox
                    onChange={handeChange}
                    checked={checked}
                    className={cn(cls.checkbox)}
                />
                <img
                    src={item.images[0] ?? ""}
                    alt="product"
                    width={40}
                    height={40}
                    className="min-w-12 h-12 w-12 object-cover"
                />
                <div className={cn(cls.content)}>
                    <Typography font="Inter-R" tag="h2" size={14}>
                        {item.name}
                    </Typography>
                    <Typography font="Inter-R" tag="h3" size={14}>
                        {item.quantity_available}
                    </Typography>
                </div>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Toggle disabled={pending} checked={toggle}  onChange={handleToggle} className={cn(cls.toggle)}  />
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h4">
                    {item?.buybacks_progress ?? "-"}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.views}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.completed_buybacks_count ?? "0"}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.conversion ?? "0"}%
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.ads ? item.ads.length : "-"}
                </Typography>
            </td>
        </>
    );
};

export { ProductsTableBodyItem };
