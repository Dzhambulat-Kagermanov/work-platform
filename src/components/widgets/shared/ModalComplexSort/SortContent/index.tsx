import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Dropdown, Typography } from "@/components/ui";
import { slugs } from "@/components/widgets/shared/ModalSort/constants/slugs";
import cls from "./index.module.scss";
import { SortType } from "@/store/useFiltersStore";

interface Props extends TClassName {
    sort: SortType;
    setSort: (value: SortType) => void;
}
const SortContent: FC<Props> = ({ className, setSort, sort }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Сортировка
            </Typography>
            <Dropdown
                expandTransition={{
                    speedSeconds: 0.4,
                    property: "ease",
                }}
                icon={<div className={cn(cls.circle)} />}
                wrapperCls={cn(cls.drp_wrapper)}
                defaultActiveValue={sort || slugs[0].value}
                items={slugs.map((slug) => {
                    return {
                        content: (
                            <Typography
                                font="Inter-M"
                                size={16}
                                className={cn(cls.drp_item)}
                            >
                                {slug.label}
                            </Typography>
                        ),
                        value: slug.value,
                        onClick: () => {
                            setSort(slug.value);
                        },
                    };
                })}
            />
        </div>
    );
};

export { SortContent };
