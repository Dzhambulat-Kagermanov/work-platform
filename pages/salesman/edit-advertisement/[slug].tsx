import { CreateEditAdvertisementPage } from "@/components/page/create-edit-advertisement-page";

export default function EditAdvertisement() {
    //@ts-expect-error: Исправить потом
    return <CreateEditAdvertisementPage product={null} />;
}
