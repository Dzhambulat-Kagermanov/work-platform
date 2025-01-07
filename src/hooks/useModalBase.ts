import { useState, useEffect } from "react";
import { TModalSlug, useModalStore } from "../store/useModalStore";
import { TRAN_MID } from "@/constants";
import { useBodyClassName } from "./useBodyClassName";

interface Params extends TModalSlug {
    transitionSpeed?: number;
}

export const useModalBase = ({ slug, transitionSpeed }: Params) => {
    const modalState = useModalStore(
        (state) => state.modalsStates[slug]?.modalState,
    );
    const [visibleTransition, setVisibleTransition] =
        useState<boolean>(!!modalState);
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClose = () => {
        setVisibleTransition(false);
        const timeout = setTimeout(() => {
            hideModal({ slug });
        }, transitionSpeed || TRAN_MID);
    };

    // Скрыть скроллбар
    const bodyClassNameAction = useBodyClassName();
    useEffect(() => {
        if (visibleTransition)
            bodyClassNameAction({ className: "hide-scrollbar", type: "add" });
        else
            bodyClassNameAction({
                className: "hide-scrollbar",
                type: "remove",
            });
    }, [visibleTransition]);

    useEffect(() => {
        if (visibleTransition !== modalState) {
            const timeout = setTimeout(() => {
                setVisibleTransition(!!modalState);
            }, 1);
        }
    }, [modalState]);

    return {
        visibleTransition,
        modalState,
        handleClose,
    };
};
