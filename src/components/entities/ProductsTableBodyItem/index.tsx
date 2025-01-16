import { FC } from "react";
import { Checkbox, Toggle, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { WbProduct } from "@/types/api/Product";

interface Props {
    columnCls?: string;
    item: WbProduct;
}
const ProductsTableBodyItem: FC<Props> = ({ item, columnCls }) => {
    return (
        <>
            <td className={cn(cls.column, [cls.product, columnCls])}>
                <Checkbox className={cn(cls.checkbox)} defaultChecked={false} />
                <img
                    src={item.images[0] ?? ""}
                    alt="product"
                    width={40}
                    className="min-w-12 h-12 w-12 object-cover"
                    height={40}
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
                <Toggle className={cn(cls.toggle)} defaultChecked={false} />
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h4">
                    {item.quantity_available}шт. / {25}шт.
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {25}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {item.quantity_available}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {25}%
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {25}
                </Typography>
            </td>
        </>
    );
};

export { ProductsTableBodyItem };
