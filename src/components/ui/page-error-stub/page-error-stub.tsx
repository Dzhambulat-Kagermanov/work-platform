import React from "react";

type PageErrorStubProps = {
    text?: string;
};

const PageErrorStub: React.FC<PageErrorStubProps> = ({ text }) => {
    return (
        <div className="text-center flex items-center justify-center w-full h-[75dvh] min-h-[250px]">
            <h3 className="text-lg">
                {text ?? "Не удалось загрузить страницу."}
            </h3>
        </div>
    );
};

export default PageErrorStub;
