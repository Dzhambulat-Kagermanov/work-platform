"use client";
import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { SALESMAN_ADD_ADVERTISEMENT_MODAL } from "@/constants";
import { useGetWbProductQuery } from "@/hooks/api/seller";
import { useModalStore } from "@/store";
import { hideModalSelector } from "@/store/useModalStore";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

interface Props {}
const CreateAdvertisement: FC<Props> = () => {
    const searchParams = useSearchParams();
    const hideModal = useModalStore(hideModalSelector);

    useEffect(() => {
        hideModal({ slug: SALESMAN_ADD_ADVERTISEMENT_MODAL });
    }, []);

    const {
        data: product,
        isLoading,
        isError,
    } = useGetWbProductQuery(searchParams.get("selectedWbItem") as string);

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError || !product) {
        return <PageErrorStub />;
    }

    return <CreateEditAdvertisementPage product={product} />;
};

export default CreateAdvertisement;
