import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { useGetWbProductQuery } from "@/hooks/api/seller";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface Props {}
const CreateAdvertisement: FC<Props> = () => {
    const searchParams = useSearchParams();

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
