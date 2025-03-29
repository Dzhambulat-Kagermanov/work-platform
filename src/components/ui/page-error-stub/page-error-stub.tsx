import { cn } from "@/lib";
import { TClassName } from "@/types";
import React from "react";

type PageErrorStubProps = {
    text?: string;
} & TClassName;

const PageErrorStub: React.FC<PageErrorStubProps> = ({ text, className }) => {
    return (
        <div
            className={cn(
                "text-center flex items-center justify-center w-full h-[75dvh] min-h-[250px]",
                [className],
            )}
        >
            <h3 className="text-lg">
                {text ?? "Не удалось загрузить страницу."}
            </h3>
        </div>
    );
};

export default PageErrorStub;
