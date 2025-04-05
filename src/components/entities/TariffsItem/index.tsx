import { FC, MouseEventHandler } from "react";
import { TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { Button, DiscountPlaque, Typography } from "@/components/ui";
import { useModalStore } from "@/store";
import { SALESMAN_TARIFFS_MODAL } from "@/constants";
import cls from "./index.module.scss";
import { TariffItem } from "@/types/api";
import { TariffsModal } from "@/components/widgets/Salesman/TariffsModal";

interface Props extends TClassName, TTag {
    tariff: TariffItem;
}
const TariffsItem: FC<Props> = ({ className, tariff, tag = "div" }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleClick: MouseEventHandler = () => {
        showModal({
            slug: `${SALESMAN_TARIFFS_MODAL}${tariff.id}`,
        });
    };
    const Tag = tag;
    return (
        <>
            <TariffsModal tariff={tariff} className={cn(cls.modal)} />
            <Tag className={cn(cls.wrapper, [className])}>
                <div className={cn(cls.head)}>
                    <Typography font="Inter-M" size={20} tag="h2">
                        {tariff.name}
                    </Typography>
                    <DiscountPlaque
                        customColor="blue"
                        customContent={(val) => val + ""}
                    >
                        Бессрочно
                    </DiscountPlaque>
                </div>
                {/* <ul className={cn(cls.advantages)}>
                    {advantages.map((el, idx) => {
                        return (
                            <li className={cn(cls.item)} key={idx + "/"}>
                                <Image
                                    src={"/images/delivery/confirm-action.svg"}
                                    alt="Преимущество"
                                    width={18}
                                    height={18}
                                />
                                <Typography font="Inter-R" size={12}>
                                    {el}
                                </Typography>
                            </li>
                        );
                    })}
                </ul> */}
                <div className={cn(cls.price)}>
                    <Typography font="Inter-M" size={16} tag="h2">
                        {tariff.buybacks_count} шт.
                    </Typography>
                    {/* <Typography font="Inter-R" size={10} tag="h3">
                        {tariff.}₽ / за выкуп товара
                    </Typography> */}
                </div>
                <div className={cn(cls.footer)}>
                    <Typography font="Inter-M" size={16}>
                        {tariff.price} ₽
                    </Typography>
                    <Button
                        size="low"
                        theme="fill"
                        className={cn(cls.btn)}
                        onClick={handleClick}
                    >
                        Купить
                    </Button>
                </div>
            </Tag>
        </>
    );
};

export { TariffsItem };
