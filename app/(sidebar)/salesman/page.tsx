import { HomePage } from "@/components/page/Salesman/Home";
import { TChatType } from "@/components/widgets/Buyer/DeliverySidebar/types";
import { TSalesmanHomePageType } from "@/components/widgets/Salesman/HomePagesSwitcher";
import { FC } from "react";

interface Props {
    searchParams: Promise<{
        homePageType: TSalesmanHomePageType;
        chatType: TChatType;
    }>;
}
const Home: FC<Props> = async ({ searchParams }) => {
    const { homePageType, chatType } = await searchParams;

    return <HomePage homePageType={homePageType || null} chatType={chatType} />;
};

export default Home;
