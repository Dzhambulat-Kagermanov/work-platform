import { TUserInfo } from "@/types";
import { User } from "@/types/api";
import { create } from "zustand";

interface Props {
    userId?: TUserInfo["id"];
    setUserId: (id: TUserInfo["id"]) => void;
    profile?: User;
    setProfile?: (profile: User) => void;
}

const useProfile = create<Props>()((set, get) => ({
    setUserId: (id) => {
        set({ userId: id });
    },
    setProfile: (profile) => {
        set({ profile });
    },
}));

const setProfileSelector = (state: Props) => state.setProfile;
const setUserIdSelector = (state: Props) => state.setUserId;
const profileSelector = (state: Props) => state.profile;
const userIdSelector = (state: Props) => state.userId;

export {
    useProfile,
    userIdSelector,
    setUserIdSelector,
    setProfileSelector,
    profileSelector,
};
