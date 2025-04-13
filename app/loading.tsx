import { FC } from "react";
import { TChildren } from "@/types";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TChildren {}

const Loading: FC<Props> = ({ children }) => {
    return (
        <>
            <PageLoader />
            {children}
        </>
    );
};

export default Loading;
