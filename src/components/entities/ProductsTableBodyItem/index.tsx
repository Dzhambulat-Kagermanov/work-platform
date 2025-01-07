import { FC } from "react";
import { TSalesmanTableProduct } from "@/types";
import { Checkbox, Toggle, Typography } from "@/components/ui";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props extends TSalesmanTableProduct {
    columnCls?: string;
}
const ProductsTableBodyItem: FC<Props> = ({
    advertisements,
    conversion,
    id,
    product: { image, name, number },
    ransoms,
    ransomsQnt,
    views,
    defaultCheckboxValue,
    defaultStatusValue,
    columnCls,
}) => {
    return (
        <>
            <td className={cn(cls.column, [cls.product, columnCls])}>
                <Checkbox
                    className={cn(cls.checkbox)}
                    defaultChecked={defaultCheckboxValue}
                />
                <Image src={image} alt="product" width={40} height={40} />
                <div className={cn(cls.content)}>
                    <Typography font="Inter-R" tag="h2" size={14}>
                        {name}
                    </Typography>
                    <Typography font="Inter-R" tag="h3" size={14}>
                        {number}
                    </Typography>
                </div>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Toggle
                    className={cn(cls.toggle)}
                    defaultChecked={defaultStatusValue}
                />
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h4">
                    {ransoms[0]}шт. / {ransoms[1]}шт.
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {views}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {ransomsQnt}
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {conversion}%
                </Typography>
            </td>
            <td className={cn(cls.column, [columnCls])}>
                <Typography font="Inter-R" size={14} tag="h3">
                    {advertisements}
                </Typography>
            </td>
        </>
    );
};

export { ProductsTableBodyItem };
