import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const ArrowIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            className={className}
        >
            <path
                d="M5.50004 1.33337V10.6667M5.50004 10.6667L10.1667 6.00004M5.50004 10.6667L0.833374 6.00004"
                stroke={color}
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { ArrowIcon };
