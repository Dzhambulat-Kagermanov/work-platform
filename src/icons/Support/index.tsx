"use client";
import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const SupportIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className={className}
        >
            <path
                d="M3.93 3.93L8.17 8.17M13.83 13.83L18.07 18.07M18.07 3.93L13.83 8.17L17.36 4.64M3.93 18.07L8.17 13.83M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { SupportIcon };
