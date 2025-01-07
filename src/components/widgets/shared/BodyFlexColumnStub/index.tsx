"use client";
import { useBodyClassName } from "@/hooks";
import { FC, useEffect } from "react";

interface Props {}
const BodyFlexColumnStub: FC<Props> = ({}) => {
    const bodyClassChanger = useBodyClassName();

    let isFirst = true;
    useEffect(() => {
        if (isFirst) {
            bodyClassChanger({ className: "body-flex-column", type: "add" });
        }
        isFirst = false;
    }, []);

    return <></>;
};

export { BodyFlexColumnStub };
