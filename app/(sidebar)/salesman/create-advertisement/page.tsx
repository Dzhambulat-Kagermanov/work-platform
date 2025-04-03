import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page"
import { FC } from "react"

interface Props {
    searchParams: Promise<{ selectedWbItem?: string }>
}
const CreateAdvertisement: FC<Props> = async ({ searchParams }) => {
    const { selectedWbItem } = await searchParams

    return <CreateEditAdvertisementPage selectedWbItem={selectedWbItem as string} />
}

export default CreateAdvertisement
