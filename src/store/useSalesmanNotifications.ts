import { TNotificationItemProps, TUserInfo } from "@/types";
import { create } from "zustand";

type TNotificationsLayoutStates = "isHidden" | "isHiding" | "isVisible";

interface Props {
    tempNotifications: TNotificationItemProps[];
    allNotifications: TNotificationItemProps[];
    notificationsLayoutState: TNotificationsLayoutStates;

    setNotificationsLayoutState: (newState: TNotificationsLayoutStates) => void;
    addNotifications: (newItem: TNotificationItemProps[]) => void;
    resetTempNotifications: () => void;
    deleteTempNotification: (id: number) => void;
}

const useSalesmanNotifications = create<Props>()((set, get) => ({
    notificationsLayoutState: "isHidden",
    tempNotifications: [],
    allNotifications: [],
    addNotifications(notifications) {
        set((state) => ({
            allNotifications: notifications,
        }));
        set((state) => ({
            tempNotifications: notifications.filter((props) => {
                return !props.is_read;
            }),
        }));
    },
    deleteTempNotification(id) {
        set((state) => ({
            tempNotifications: state.tempNotifications.filter(
                (props) => props.id !== id,
            ),
        }));
    },
    resetTempNotifications() {
        set(() => ({ tempNotifications: [] }));
    },
    setNotificationsLayoutState(newState) {
        set(() => ({ notificationsLayoutState: newState }));
    },
}));

const notificationsLayoutStateSelector = (state: Props) =>
    state.notificationsLayoutState;
const tempNotificationsSelector = (state: Props) => state.tempNotifications;

const allNotificationsSelector = (state: Props) => state.allNotifications;
const addNotificationsSelector = (state: Props) => state.addNotifications;
const resetTempNotificationsSelector = (state: Props) =>
    state.resetTempNotifications;
const setNotificationsLayoutStateSelector = (state: Props) =>
    state.setNotificationsLayoutState;
const deleteTempNotificationSelector = (state: Props) =>
    state.deleteTempNotification;

export {
    useSalesmanNotifications,
    notificationsLayoutStateSelector,
    tempNotificationsSelector,
    allNotificationsSelector,
    addNotificationsSelector,
    resetTempNotificationsSelector,
    setNotificationsLayoutStateSelector,
    deleteTempNotificationSelector,
    type TNotificationsLayoutStates,
};
