import { FC } from "react";
import { Typography, Input } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props
    extends Record<"priceFrom" | "priceTo", string>,
        Record<
            "setPriceFrom" | "setPriceTo",
            React.Dispatch<React.SetStateAction<string>>
        > {}
const Content: FC<Props> = ({
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
}) => {
    return (
        <>
            <Typography
                tag="h2"
                font="Inter-SB"
                size={18}
                className={cn(cls.title)}
            >
                Цена, ₽
            </Typography>
            <div className={cn(cls.inputs)}>
                <Input
                    type="number"
                    min={0}
                    placeholder="от"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                />
                <hr />
                <Input
                    type="number"
                    min={0}
                    placeholder="до"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                />
            </div>
        </>
    );
};

export { Content };
