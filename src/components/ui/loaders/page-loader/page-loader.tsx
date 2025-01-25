import { cn } from "@/lib";
import { TClassName } from "@/types";
import React from "react";

type PageLoaderProps = {} & TClassName

const PageLoader: React.FC<PageLoaderProps> = ({
    className
}) => {
    return (
        <div className={cn("w-full h-[80dvh] min-h-[250px] flex items-center justify-center", [className])}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-spin"
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
        </div>
    );
};

export default PageLoader;
