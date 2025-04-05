import { TUserInfo } from "@/types";
import { create } from "zustand";

interface Props {
    userId?: TUserInfo["id"];
    setUserId: (id: TUserInfo["id"]) => void;
}

const useProfile = create<Props>()((set, get) => ({
    setUserId: (id) => {
        set({ userId: id });
    },
}));

const setUserIdSelector = (state: Props) => state.setUserId;
const userIdSelector = (state: Props) => state.userId;

export { useProfile, userIdSelector, setUserIdSelector };
