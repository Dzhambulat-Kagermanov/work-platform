import { TUserInfo } from "@/types";
import { User } from "@/types/api";
import { create } from "zustand";

interface Props {
    userId?: TUserInfo["id"];
    setUserId: (id: TUserInfo["id"]) => void;
    profile?: User;
    setProfile: (profile: User) => void;
    isSwitchRedirect?: boolean;
    setIsSwitchRedirect: (val: boolean) => void;
}

const useProfile = create<Props>()((set, get) => ({
    setUserId: (id) => {
        set({ userId: id });
    },
    setProfile: (profile) => {
        set({ profile });
    },
    setIsSwitchRedirect: (isSwitchRedirect) => {
        set({ isSwitchRedirect });
    },
}));

const setProfileSelector = (state: Props) => state.setProfile;
const setUserIdSelector = (state: Props) => state.setUserId;
const profileSelector = (state: Props) => state.profile;
const userIdSelector = (state: Props) => state.userId;
const isSwitchRedirectSelector = (state: Props) => state.isSwitchRedirect;
const setIsSwitchRedirectSelector = (state: Props) => state.setIsSwitchRedirect;

export {
    useProfile,
    userIdSelector,
    setUserIdSelector,
    setProfileSelector,
    isSwitchRedirectSelector,
    setIsSwitchRedirectSelector,
    profileSelector,
};
