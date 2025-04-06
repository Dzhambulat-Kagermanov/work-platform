import { TNotificationItemProps, TUserInfo } from "@/types";
import { create } from "zustand";

type TNotificationsLayoutStates = "isHidden" | "isHiding" | "isVisible";

interface Props {
    tempNotifications: TNotificationItemProps[];
    allNotifications: TNotificationItemProps[];
    notificationsLayoutState: TNotificationsLayoutStates;

    setNotificationsLayoutState: (newState: TNotificationsLayoutStates) => void;
    initNotifications: (newItem: TNotificationItemProps[]) => void;
    addNotification: (newItem: TNotificationItemProps) => void;
    resetTempNotifications: () => void;
    deleteTempNotification: (id: number) => void;
}

const useSalesmanNotifications = create<Props>()((set, get) => ({
    notificationsLayoutState: "isHidden",
    tempNotifications: [],
    allNotifications: [],
    initNotifications(notifications) {
        set((state) => ({
            allNotifications: notifications,
        }));
        set((state) => ({
            tempNotifications: notifications.filter((props) => {
                return !props.is_read;
            }),
        }));
    },
    addNotification: (notification) => {
        set((state) => ({
            allNotifications: [...state.allNotifications, notification],
        }));
        set((state) => ({
            tempNotifications: [
                ...state.tempNotifications,
                notification,
            ].filter((props) => {
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
const initNotificationsSelector = (state: Props) => state.initNotifications;
const addNotificationSelector = (state: Props) => state.addNotification;
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
    initNotificationsSelector,
    resetTempNotificationsSelector,
    setNotificationsLayoutStateSelector,
    deleteTempNotificationSelector,
    addNotificationSelector,
    type TNotificationsLayoutStates,
};
