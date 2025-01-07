import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const ExpandArrowIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className={className}
        >
            <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke={color}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { ExpandArrowIcon };
