import { base64ToBlob } from "@/lib/base64ToBlob";
import { blobToBase64 } from "@/lib/blobToBase64";
import { Order } from "@/types/api";
import Chat from "@/types/api/Chat";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TSendMessage = Order["messages"][0]["text"];
type TChatMessage = Chat["messages"][0];
type TOrderMessage = Order["messages"][0];

type TGeneralFile<T> = {
    id: string;
    filePreviewURL: string;
    name: string;
    size: number;
    data: T;
};
type TSendFile = TGeneralFile<string>;
type TGetFile = TGeneralFile<Blob>;

interface TUseChat {
    isMobileVersion?: boolean;
    setIsMobileVersion: (value: boolean) => void;

    buyerActiveChat?: Order["id"];
    setBuyerActiveChat: (param: Order["id"] | undefined) => void;
    salesmanActiveChat?: Order["id"];
    setSalesmanActiveChat: (param: Order["id"] | undefined) => void;

    initBuyerChats?: Chat[];
    setInitBuyerChats: (params: Chat[]) => void;
    updateBuyerDataSelector: (id: number) => void;
    addMessageForBuyerChat: (param: TChatMessage, id: Chat["id"]) => void;
    sendBuyerMessage?: TSendMessage;
    sendBuyerFiles?: TSendFile[];
    buyerChatData?: Order;
    initBuyerData: (message: Order) => void;
    setSendBuyerMessage: (message: TSendMessage) => void;
    setSendBuyerFiles: (file: TGetFile) => void;
    removeSendBuyerFile: (id: TSendFile["id"]) => void;
    addBuyerMessage: (message: TOrderMessage) => void;
    getSendBuyerFiles: () => TGetFile[] | undefined;
    resetSendBuyerFiles: () => void;

    initSalesmanChats?: Chat[];
    setInitSalesmanChats: (params: Chat[]) => void;
    updateSalesmanDataSelector: (id: number) => void;
    addMessageForSalesmanChat: (param: TChatMessage, id: Chat["id"]) => void;
    sendSalesmanMessage?: TSendMessage;
    sendSalesmanFiles?: TSendFile[];
    salesmanChatData?: Order;
    initSalesmanData: (message: Order) => void;
    setSendSalesmanMessage: (message: TSendMessage) => void;
    setSendSalesmanFiles: (file: TGetFile) => void;
    removeSendSalesmanFile: (id: TSendFile["id"]) => void;
    addSalesmanMessage: (message: TOrderMessage) => void;
    getSendSalesmanFiles: () => TGetFile[] | undefined;
    resetSendSalesmanFiles: () => void;
}

const useChat = create<TUseChat>()(
    devtools((set, get) => ({
        updateBuyerDataSelector: (id) => {
            //@ts-ignore
            set((state) => {
                const initBuyerChats = get().initBuyerChats;

                if (state.buyerChatData && initBuyerChats) {
                    const item = initBuyerChats.find(
                        (props) => props.id === id,
                    );

                    return {
                        ...state,
                        buyerChatData: {
                            ...state.buyerChatData,
                            messages: item ? item.messages : [],
                        },
                    };
                }
                return state;
            });
        },
        updateSalesmanDataSelector: (id) => {
            //@ts-ignore
            set((state) => {
                const initSalesmanChats = get().initSalesmanChats;

                if (state.salesmanChatData && initSalesmanChats) {
                    const item = initSalesmanChats.find(
                        (props) => props.id === id,
                    );

                    return {
                        ...state,
                        salesmanChatData: {
                            ...state.salesmanChatData,
                            messages: item ? item.messages : [],
                        },
                    };
                }
                return state;
            });
        },
        setIsMobileVersion: (isMobileVersion) => {
            set({ isMobileVersion });
        },
        setBuyerActiveChat: (buyerActiveChat) => {
            set({ buyerActiveChat });
        },
        setSalesmanActiveChat: (salesmanActiveChat) => {
            set({ salesmanActiveChat });
        },
        setInitBuyerChats: (initBuyerChats) => {
            set({ initBuyerChats });
        },
        setInitSalesmanChats: (initSalesmanChats) => {
            set({ initSalesmanChats });
        },
        setSendBuyerMessage: (message) => {
            set({
                sendBuyerMessage: message,
            });
        },
        setSendBuyerFiles: async (file) => {
            const files = get().sendBuyerFiles;
            const saveFile: TSendFile = {
                ...file,
                data: await blobToBase64(file.data),
            };

            set({
                sendBuyerFiles: [...(files ? files : []), saveFile],
            });
        },
        removeSendBuyerFile: (id) => {
            const files = get().sendBuyerFiles;
            if (files)
                set({
                    sendBuyerFiles: files.filter((props) => {
                        return props.id !== id;
                    }),
                });
        },
        removeSendSalesmanFile: (id) => {
            const files = get().sendSalesmanFiles;
            if (files)
                set({
                    sendSalesmanFiles: files.filter((props) => {
                        return props.id !== id;
                    }),
                });
        },
        getSendBuyerFiles: () => {
            const files = get().sendBuyerFiles;
            if (files) {
                return files.map((file) => ({
                    data: base64ToBlob(file.data),
                }));
            }
        },
        getSendSalesmanFiles: () => {
            const files = get().sendSalesmanFiles;
            if (files) {
                return files.map((file) => ({
                    data: base64ToBlob(file.data),
                }));
            }
        },
        setSendSalesmanMessage: (message) => {
            set({
                sendSalesmanMessage: message,
            });
        },
        setSendSalesmanFiles: async (file) => {
            const files = get().sendSalesmanFiles;
            const saveFile: TSendFile = {
                ...file,
                data: await blobToBase64(file.data),
            };

            set({
                sendSalesmanFiles: [...(files ? files : []), saveFile],
            });
        },
        initSalesmanData: (messages) => {
            set({
                salesmanChatData: messages,
            });
        },
        initBuyerData: (messages) => {
            set({
                buyerChatData: messages,
            });
        },
        addBuyerMessage: (message) => {
            set((state) => {
                console.log(!!state.buyerChatData);

                if (state.buyerChatData) {
                    return {
                        ...state,
                        buyerChatData: {
                            ...state.buyerChatData,
                            messages: [
                                ...state.buyerChatData.messages,
                                message,
                            ],
                        },
                    };
                }
                return state;
            });
        },
        addSalesmanMessage: (message) => {
            set((state) => {
                if (state.salesmanChatData) {
                    console.log(state.salesmanChatData);

                    return {
                        ...state,
                        salesmanChatData: {
                            ...state.salesmanChatData,
                            messages: [
                                ...state.salesmanChatData.messages,
                                message,
                            ],
                        },
                    };
                }
                return state;
            });
        },
        addMessageForBuyerChat: (message, id) => {
            set((state) => {
                if (state.initBuyerChats) {
                    const item = state.initBuyerChats.find((props) => {
                        return props.id === id;
                    });

                    if (!item) return state;

                    return {
                        ...state,
                        initSalesmanChats: [
                            ...state.initBuyerChats,
                            { ...item, messages: [...item.messages, message] },
                        ],
                    };
                }
                return state;
            });
        },
        addMessageForSalesmanChat: (message, id) => {
            set((state) => {
                if (state.initSalesmanChats) {
                    const item = state.initSalesmanChats.find((props) => {
                        return props.id === id;
                    });

                    if (!item) return state;

                    return {
                        ...state,
                        initSalesmanChats: [
                            ...state.initSalesmanChats,
                            { ...item, messages: [...item.messages, message] },
                        ],
                    };
                }
                return state;
            });
        },
        resetSendBuyerFiles: () => {
            set(() => ({ sendBuyerFiles: [] }));
        },
        resetSendSalesmanFiles: () => {
            set(() => ({ sendSalesmanFiles: [] }));
        },
    })),
);

const isMobileVersionSelector = (state: TUseChat) => state.isMobileVersion;
const setIsMobileVersionSelector = (state: TUseChat) =>
    state.setIsMobileVersion;
const buyerActiveChatSelector = (state: TUseChat) => state.buyerActiveChat;
const setBuyerActiveChatSelector = (state: TUseChat) =>
    state.setBuyerActiveChat;
const salesmanActiveChatSelector = (state: TUseChat) =>
    state.salesmanActiveChat;
const setSalesmanActiveChatSelector = (state: TUseChat) =>
    state.setSalesmanActiveChat;
const addMessageForSalesmanChatSelector = (state: TUseChat) =>
    state.addMessageForSalesmanChat;
const addMessageForBuyerChatSelector = (state: TUseChat) =>
    state.addMessageForBuyerChat;
const sendBuyerMessageSelector = (state: TUseChat) => state.sendBuyerMessage;
const sendBuyerFilesSelector = (state: TUseChat) => state.sendBuyerFiles;
const buyerDataSelector = (state: TUseChat) => state.buyerChatData;
const initBuyerDataSelector = (state: TUseChat) => state.initBuyerData;
const setSendBuyerMessageSelector = (state: TUseChat) =>
    state.setSendBuyerMessage;
const setSendBuyerFilesSelector = (state: TUseChat) => state.setSendBuyerFiles;
const sendSalesmanMessageSelector = (state: TUseChat) =>
    state.sendSalesmanMessage;
const sendSalesmanFilesSelector = (state: TUseChat) => state.sendSalesmanFiles;
const salesmanDataSelector = (state: TUseChat) => state.salesmanChatData;
const initSalesmanDataSelector = (state: TUseChat) => state.initSalesmanData;
const setSendSalesmanMessageSelector = (state: TUseChat) =>
    state.setSendSalesmanMessage;
const setInitSalesmanChatsSelector = (state: TUseChat) =>
    state.setInitSalesmanChats;
const setInitBuyerChatsSelector = (state: TUseChat) => state.setInitBuyerChats;
const initSalesmanChatsSelector = (state: TUseChat) => state.initSalesmanChats;
const initBuyerChatsSelector = (state: TUseChat) => state.setInitBuyerChats;
const setSendSalesmanFilesSelector = (state: TUseChat) =>
    state.setSendSalesmanFiles;
const addBuyerMessageSelector = (state: TUseChat) => state.addBuyerMessage;
const addSalesmanMessageSelector = (state: TUseChat) =>
    state.addSalesmanMessage;
const updateBuyerDataSelector = (state: TUseChat) =>
    state.updateBuyerDataSelector;
const updateSalesmanDataSelector = (state: TUseChat) =>
    state.updateSalesmanDataSelector;
const removeSendBuyerFileSelector = (state: TUseChat) =>
    state.removeSendBuyerFile;
const removeSendSalesmanFileSelector = (state: TUseChat) =>
    state.removeSendSalesmanFile;
const getSendBuyerFilesSelector = (state: TUseChat) => state.getSendBuyerFiles;
const getSendSalesmanFilesSelector = (state: TUseChat) =>
    state.getSendSalesmanFiles;
export const resetSendBuyerFilesSelector = (state: TUseChat) =>
    state.resetSendBuyerFiles;
export const resetSendSalesmanFilesSelector = (state: TUseChat) =>
    state.resetSendSalesmanFiles;

export {
    useChat,
    type TSendFile,
    sendBuyerMessageSelector,
    sendBuyerFilesSelector,
    buyerDataSelector,
    initBuyerDataSelector,
    setSendBuyerMessageSelector,
    setSendBuyerFilesSelector,
    sendSalesmanMessageSelector,
    sendSalesmanFilesSelector,
    salesmanDataSelector,
    initSalesmanDataSelector,
    setSendSalesmanMessageSelector,
    setSendSalesmanFilesSelector,
    addBuyerMessageSelector,
    addSalesmanMessageSelector,
    buyerActiveChatSelector,
    setBuyerActiveChatSelector,
    addMessageForBuyerChatSelector,
    addMessageForSalesmanChatSelector,
    salesmanActiveChatSelector,
    setSalesmanActiveChatSelector,
    setInitSalesmanChatsSelector,
    setInitBuyerChatsSelector,
    initBuyerChatsSelector,
    initSalesmanChatsSelector,
    updateBuyerDataSelector,
    updateSalesmanDataSelector,
    isMobileVersionSelector,
    setIsMobileVersionSelector,
    removeSendBuyerFileSelector,
    removeSendSalesmanFileSelector,
    getSendBuyerFilesSelector,
    getSendSalesmanFilesSelector,
};
