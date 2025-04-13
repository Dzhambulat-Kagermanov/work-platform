import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";

interface Props extends TClassName {}

const ReferralPage: FC<Props> = ({ className }) => {
    return <div className={cn(cls.main, [className])}></div>;
};

export { ReferralPage };
