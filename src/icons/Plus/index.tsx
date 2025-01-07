import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const PlusIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={className}
        >
            <path
                d="M6.99984 1.16669V12.8334M1.1665 7.00002H12.8332"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { PlusIcon };
