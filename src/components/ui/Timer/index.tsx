"use client";
import { FC, useEffect, useState } from "react";
import { formatter } from "./lib/formatter";

export type TFormat = "HH:MM:SS" | "MM:SS" | "SS" | "DD:HH:MM:SS";

type TGeneral = {
    second?: number;
    onComplete?: () => void;
};
type Props =
    | ({
          customFormatter?: (seconds: number) => string;
          format?: never;
      } & TGeneral)
    | ({
          customFormatter?: never;
          format?: TFormat;
      } & TGeneral);

const Timer: FC<Props> = ({
    format,
    second = 60,
    customFormatter,
    onComplete,
}) => {
    const [seconds, setSeconds] = useState<number>(second);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((cur) => {
                if (cur - 1 >= 0) return cur - 1;
                if (cur === 0) {
                    clearInterval(interval);
                    onComplete && onComplete();
                }
                return cur;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (customFormatter) {
        return <>{customFormatter(seconds)}</>;
    } else {
        return <>{formatter(seconds, format)}</>;
    }
};

export { Timer };
