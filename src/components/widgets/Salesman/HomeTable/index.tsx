import { FC, ReactNode } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { Pagination, TPaginationProps } from "../../shared/Pagination";
import cls from "./index.module.scss";
import { PaginationValue } from "@/hooks/client/usePagination";

interface Props extends TClassName {
    head: (string | ReactNode)[];
    body: ReactNode[];
    headCls?: string;
    headRowCls?: string;
    headCol?: string;
    bodyCls?: string;
    bodyRowCls?: string;
    tableCls?: string;
    tableWrapperCls?: string;
    pagination: PaginationValue;
}
const HomeTable: FC<Props> = ({
    className,
    body,
    head,
    pagination,
    bodyCls,
    bodyRowCls,
    headCls,
    headCol,
    headRowCls,
    tableCls,
    tableWrapperCls,
}) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.table_wrapper, [tableWrapperCls])}>
                <table className={cn(cls.table, [tableCls])}>
                    <thead className={cn(cls.head, [headCls])}>
                        <tr className={cn(cls.row, [headRowCls])}>
                            {head.map((item, idx) => {
                                return (
                                    <td
                                        className={cn(cls.column, [headCol])}
                                        key={idx}
                                    >
                                        {typeof item === "string" ? (
                                            <Typography
                                                font="Inter-M"
                                                size={12}
                                            >
                                                {item}
                                            </Typography>
                                        ) : (
                                            item
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className={cn(cls.body, [bodyCls])}>
                        {body.map((item, index) => {
                            return (
                                <tr
                                    className={cn(cls.row, [bodyRowCls])}
                                    key={index + "/"}
                                >
                                    {item}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                className={cn(cls.pagination)}
                pagination={pagination}
            />
        </div>
    );
};

export { HomeTable };
