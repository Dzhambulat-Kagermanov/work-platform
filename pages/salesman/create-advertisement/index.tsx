import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { useGetWbProductQuery } from "@/hooks/api/seller";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CreateAdvertisement() {
    const router = useRouter();
    const [productId, setProductId] = useState<string | null>(null);

    useEffect(() => {
        if (router.query.selectedWbItem) {
            setProductId(router.query.selectedWbItem as string);
        }
    }, [router.query]);

    const {
        data: product,
        isLoading,
        isError,
    } = useGetWbProductQuery(productId as string);

    if (isLoading) return <PageLoader />;
    if (isError || !product) return <PageErrorStub />;

    return <CreateEditAdvertisementPage product={product} />;
}
