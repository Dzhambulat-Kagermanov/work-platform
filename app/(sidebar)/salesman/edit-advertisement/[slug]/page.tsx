import { FC } from "react"
import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page"

interface Props { }
const EditAdvertisement: FC<Props> = ({ }) => {
    //@ts-expect-error: Исправить потом
    return <CreateEditAdvertisementPage product={null} />
}

export default EditAdvertisement
