import { Order } from "@/types/api";
import { create } from "zustand";

type TSendMessage = Order["messages"][0]["text"];
type TMessage = Order["messages"][0];

interface TUseChat {
    buyerActiveChat?: Order["id"];
    setBuyerActiveChat: (param: Order["id"]) => void;
    salesmanActiveChat?: Order["id"];
    setSalesmanActiveChat: (param: Order["id"] | undefined) => void;

    initBuyerChats?: Order[];
    setInitBuyerChats: (params: Order[]) => void;
    addMessageForBuyerChat: (param: TMessage, id: Order["id"]) => void;
    sendBuyerMessage?: TSendMessage;
    sendBuyerFile?: Blob;
    buyerChatData?: Order;
    initBuyerData: (message: Order) => void;
    setSendBuyerMessage: (message: TSendMessage) => void;
    setSendBuyerFile: (file: Blob) => void;
    addBuyerMessage: (message: TMessage) => void;

    initSalesmanChats?: Order[];
    setInitSalesmanChats: (params: Order[]) => void;
    addMessageForSalesmanChat: (param: TMessage, id: Order["id"]) => void;
    sendSalesmanMessage?: TSendMessage;
    sendSalesmanFile?: Blob;
    salesmanChatData?: Order;
    initSalesmanData: (message: Order) => void;
    setSendSalesmanMessage: (message: TSendMessage) => void;
    setSendSalesmanFile: (file: Blob) => void;
    addSalesmanMessage: (message: TMessage) => void;
}

const useChat = create<TUseChat>()((set, get) => ({
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
    setSendBuyerFile: (file) => {
        set({
            sendBuyerFile: file,
        });
    },
    setSendSalesmanMessage: (message) => {
        set({
            sendSalesmanMessage: message,
        });
    },
    setSendSalesmanFile: (file) => {
        set({
            sendSalesmanFile: file,
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
            if (state.buyerChatData) {
                return {
                    buyerChatData: {
                        ...state.buyerChatData,
                        messages: [...state.buyerChatData.messages, message],
                    },
                };
            }
            return state;
        });
    },
    addSalesmanMessage: (message) => {
        set((state) => {
            if (state.salesmanChatData) {
                return {
                    salesmanChatData: {
                        ...state.salesmanChatData,
                        messages: [...state.salesmanChatData.messages, message],
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
                    initSalesmanChats: [
                        ...state.initSalesmanChats,
                        { ...item, messages: [...item.messages, message] },
                    ],
                };
            }
            return state;
        });
    },
}));

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
const sendBuyerFileSelector = (state: TUseChat) => state.sendBuyerFile;
const buyerDataSelector = (state: TUseChat) => state.buyerChatData;
const initBuyerDataSelector = (state: TUseChat) => state.initBuyerData;
const setSendBuyerMessageSelector = (state: TUseChat) =>
    state.setSendBuyerMessage;
const setSendBuyerFileSelector = (state: TUseChat) => state.setSendBuyerFile;
const sendSalesmanMessageSelector = (state: TUseChat) =>
    state.sendSalesmanMessage;
const sendSalesmanFileSelector = (state: TUseChat) => state.sendSalesmanFile;
const salesmanDataSelector = (state: TUseChat) => state.salesmanChatData;
const initSalesmanDataSelector = (state: TUseChat) => state.initSalesmanData;
const setSendSalesmanMessageSelector = (state: TUseChat) =>
    state.setSendSalesmanMessage;
const setSendSalesmanFileSelector = (state: TUseChat) =>
    state.setSendSalesmanFile;
const addBuyerMessageSelector = (state: TUseChat) => state.addBuyerMessage;
const addSalesmanMessageSelector = (state: TUseChat) =>
    state.addSalesmanMessage;

export {
    useChat,
    sendBuyerMessageSelector,
    sendBuyerFileSelector,
    buyerDataSelector,
    initBuyerDataSelector,
    setSendBuyerMessageSelector,
    setSendBuyerFileSelector,
    sendSalesmanMessageSelector,
    sendSalesmanFileSelector,
    salesmanDataSelector,
    initSalesmanDataSelector,
    setSendSalesmanMessageSelector,
    setSendSalesmanFileSelector,
    addBuyerMessageSelector,
    addSalesmanMessageSelector,
    buyerActiveChatSelector,
    setBuyerActiveChatSelector,
    addMessageForBuyerChatSelector,
    addMessageForSalesmanChatSelector,
    salesmanActiveChatSelector,
    setSalesmanActiveChatSelector,
};
