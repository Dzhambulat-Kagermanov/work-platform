import { DeliveryPage } from "@/components/page/Buyer/Delivery";
import { ChatStatus } from "@/types/api";
import { FC } from "react";

interface Props {
    searchParams: Promise<{ chatType: ChatStatus }>;
}
const Delivery: FC<Props> = async ({ searchParams }) => {
    const { chatType } = await searchParams;

    return <DeliveryPage chatType={chatType} />;
};

export default Delivery;
