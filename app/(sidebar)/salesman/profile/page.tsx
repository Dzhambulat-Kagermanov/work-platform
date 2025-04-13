import { AccountPage } from "@/components/page/account-page";
import { FC } from "react";

interface Props {}
const Profile: FC<Props> = ({}) => {
    return <AccountPage role="seller" forSalesman />;
};

export default Profile;
