import { HomePage } from "@/components/page/Salesman/Home";
import { TSalesmanHomePageType } from "@/components/widgets/Salesman/HomePagesSwitcher";
import { ChatStatus } from "@/types/api";
import { FC } from "react";

interface Props {
    searchParams: Promise<{
        homePageType: TSalesmanHomePageType;
        chatType: ChatStatus;
    }>;
}
const Home: FC<Props> = async ({ searchParams }) => {
    const { homePageType, chatType } = await searchParams;

    return <HomePage homePageType={homePageType || null} chatType={chatType} />;
};

export default Home;
