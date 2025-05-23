import { FC } from "react";
import { TIcon } from "@/types";

interface Props extends TIcon {}
const CopyIcon: FC<Props> = ({ color, className }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={className}
        >
            <path
                d="M4.1665 12.5003H3.33317C2.89114 12.5003 2.46722 12.3247 2.15466 12.0122C1.8421 11.6996 1.6665 11.2757 1.6665 10.8337V3.33366C1.6665 2.89163 1.8421 2.46771 2.15466 2.15515C2.46722 1.84259 2.89114 1.66699 3.33317 1.66699H10.8332C11.2752 1.66699 11.6991 1.84259 12.0117 2.15515C12.3242 2.46771 12.4998 2.89163 12.4998 3.33366V4.16699M9.1665 7.50033H16.6665C17.587 7.50033 18.3332 8.24652 18.3332 9.16699V16.667C18.3332 17.5875 17.587 18.3337 16.6665 18.3337H9.1665C8.24603 18.3337 7.49984 17.5875 7.49984 16.667V9.16699C7.49984 8.24652 8.24603 7.50033 9.1665 7.50033Z"
                stroke={color}
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { CopyIcon };
