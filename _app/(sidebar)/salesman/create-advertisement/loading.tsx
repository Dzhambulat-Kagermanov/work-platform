import { TChildren } from "@/types";
import { FC } from "react";

interface Props extends TChildren {}

const Loading: FC<Props> = ({ children }) => {
    return <>{children}</>;
};

export default Loading;
