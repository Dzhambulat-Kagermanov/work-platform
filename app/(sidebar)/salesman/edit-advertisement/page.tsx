"use client";
import { FC } from "react";
import { useGetWbProductQuery } from "@/hooks/api/seller";
import { useSearchParams } from "next/navigation";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import EditAdvertisementPage from "@/components/page/Salesman/EditAdvertisement";
import { useGetAdv } from "@/hooks/api/seller/useGetAdv";

interface Props {}
const EditAdvertisement: FC<Props> = ({}) => {
    const searchParams = useSearchParams();
    const {
        data: product,
        isLoading,
        isError,
    } = useGetWbProductQuery(searchParams.get("selectedWbItem") as string);

    const advQuery = useGetAdv(+(searchParams.get("editAdv") || -1));

    if (isLoading || advQuery.isLoading) {
        return <PageLoader />;
    }

    if (isError || !product || !advQuery.data) {
        return <PageErrorStub />;
    }

    return (
        <EditAdvertisementPage currentAdv={advQuery.data} product={product} />
    );
};

export default EditAdvertisement;
