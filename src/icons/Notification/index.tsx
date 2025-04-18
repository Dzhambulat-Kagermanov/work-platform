"use client";
import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const NotificationIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
            className={className}
        >
            <path
                d="M11.73 20.5C11.5542 20.8031 11.3018 21.0547 10.9982 21.2295C10.6946 21.4044 10.3504 21.4965 10 21.4965C9.64962 21.4965 9.30539 21.4044 9.00177 21.2295C8.69816 21.0547 8.44581 20.8031 8.27 20.5M16 7.5C16 5.9087 15.3679 4.38258 14.2426 3.25736C13.1174 2.13214 11.5913 1.5 10 1.5C8.4087 1.5 6.88258 2.13214 5.75736 3.25736C4.63214 4.38258 4 5.9087 4 7.5C4 14.5 1 16.5 1 16.5H19C19 16.5 16 14.5 16 7.5Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { NotificationIcon };
