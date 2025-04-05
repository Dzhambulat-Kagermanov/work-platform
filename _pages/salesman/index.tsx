import { HomePage } from "@/components/page/Salesman/Home";
import { TSalesmanHomePageType } from "@/components/widgets/Salesman/HomePagesSwitcher";
import { ChatStatus } from "@/types/api";

export default function Home({
    homePageType,
    chatType,
}: {
    homePageType: TSalesmanHomePageType;
    chatType: ChatStatus;
}) {
    return <HomePage homePageType={homePageType} chatType={chatType} />;
}

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            homePageType: context.query.homePageType || null,
            chatType: context.query.chatType || null,
        },
    };
};
