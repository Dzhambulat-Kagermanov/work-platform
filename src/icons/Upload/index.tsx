import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const UploadIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            className={className}
        >
            <path
                d="M13.8326 12.3333L10.4992 9M10.4992 9L7.1659 12.3333M10.4992 9V16.5M17.4909 14.325C18.3037 13.8819 18.9458 13.1807 19.3158 12.3322C19.6858 11.4836 19.7627 10.536 19.5344 9.63891C19.3061 8.74179 18.7855 7.94626 18.0548 7.37787C17.3241 6.80948 16.425 6.50061 15.4992 6.5H14.4492C14.197 5.52436 13.7269 4.61861 13.0742 3.85082C12.4215 3.08304 11.6033 2.47321 10.681 2.06717C9.7587 1.66113 8.75636 1.46946 7.74933 1.50657C6.7423 1.54367 5.75679 1.80858 4.86688 2.28138C3.97697 2.75419 3.20583 3.42258 2.61142 4.23631C2.01701 5.05005 1.61481 5.98794 1.43505 6.97949C1.25529 7.97104 1.30266 8.99044 1.57358 9.96105C1.8445 10.9317 2.33194 11.8282 2.99923 12.5833"
                stroke={color}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { UploadIcon };
