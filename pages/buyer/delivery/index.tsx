import { DeliveryPage } from "@/components/page/Buyer/Delivery";
import { ChatStatus } from "@/types/api";

export default function Delivery({ chatType }: { chatType: ChatStatus }) {
    return <DeliveryPage chatType={chatType} />;
}

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            chatType: context.query.chatType || null,
        },
    };
};
