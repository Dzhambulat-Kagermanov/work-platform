import { Loader } from "lucide-react";
import React from "react";

const ModalLoader: React.FC = () => {
    return (
        <div className="w-full h-full flex-auto flex items-center justify-center">
            <Loader className="animate-spin" />
        </div>
    );
};

export default ModalLoader;
