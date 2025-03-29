import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page"
import { PageLoader } from "@/components/ui/loaders"
import { PageErrorStub } from "@/components/ui/page-error-stub"
import { useGetWbProductQuery } from "@/hooks/api/seller"
import { FC } from "react"

interface Props {
    searchParams: Promise<{ selectedWbItem?: string }>
}
const CreateAdvertisement: FC<Props> = async ({ searchParams }) => {
    const { selectedWbItem } = await searchParams


    const {
        data: product,
        isLoading,
        isError,
    } = useGetWbProductQuery(selectedWbItem as string)



    if (isLoading) {
        return <PageLoader />
    }

    if (isError || !product) {
        return <PageErrorStub />
    }

    return <CreateEditAdvertisementPage product={product} />
}

export default CreateAdvertisement
