import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ReferralCrumbs } from "@/components/widgets/Salesman/ReferralCrumbs";
import { ReferralStatistic } from "@/components/widgets/Salesman/ReferralStatistic";
import { ReferralContent } from "@/components/widgets/Salesman/ReferralContent";

interface Props extends TClassName {}

const ReferralPage: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.main, [className])}>
            <ReferralCrumbs />
            <ReferralStatistic className={cls.statistic} />
            <ReferralContent />
        </div>
    );
};

export { ReferralPage };
