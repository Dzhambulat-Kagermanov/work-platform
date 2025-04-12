import { Order } from "@/types/api";
import Chat from "@/types/api/Chat";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TSendMessage = Order["messages"][0]["text"];
type TChatMessage = Chat["messages"][0];
type TOrderMessage = Order["messages"][0];

interface TUseChat {
    buyerActiveChat?: Order["id"];
    setBuyerActiveChat: (param: Order["id"] | undefined) => void;
    salesmanActiveChat?: Order["id"];
    setSalesmanActiveChat: (param: Order["id"] | undefined) => void;

    initBuyerChats?: Chat[];
    setInitBuyerChats: (params: Chat[]) => void;
    updateBuyerDataSelector: (id: number) => void;
    addMessageForBuyerChat: (param: TChatMessage, id: Chat["id"]) => void;
    sendBuyerMessage?: TSendMessage;
    sendBuyerFile?: Blob;
    buyerChatData?: Order;
    initBuyerData: (message: Order) => void;
    setSendBuyerMessage: (message: TSendMessage) => void;
    setSendBuyerFile: (file: Blob) => void;
    addBuyerMessage: (message: TOrderMessage) => void;

    initSalesmanChats?: Chat[];
    setInitSalesmanChats: (params: Chat[]) => void;
    updateSalesmanDataSelector: (id: number) => void;
    addMessageForSalesmanChat: (param: TChatMessage, id: Chat["id"]) => void;
    sendSalesmanMessage?: TSendMessage;
    sendSalesmanFile?: Blob;
    salesmanChatData?: Order;
    initSalesmanData: (message: Order) => void;
    setSendSalesmanMessage: (message: TSendMessage) => void;
    setSendSalesmanFile: (file: Blob) => void;
    addSalesmanMessage: (message: TOrderMessage) => void;
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
    })),
);

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
const setInitSalesmanChatsSelector = (state: TUseChat) =>
    state.setInitSalesmanChats;
const setInitBuyerChatsSelector = (state: TUseChat) => state.setInitBuyerChats;
const initSalesmanChatsSelector = (state: TUseChat) => state.initSalesmanChats;
const initBuyerChatsSelector = (state: TUseChat) => state.setInitBuyerChats;
const setSendSalesmanFileSelector = (state: TUseChat) =>
    state.setSendSalesmanFile;
const addBuyerMessageSelector = (state: TUseChat) => state.addBuyerMessage;
const addSalesmanMessageSelector = (state: TUseChat) =>
    state.addSalesmanMessage;
const updateBuyerDataSelector = (state: TUseChat) =>
    state.updateBuyerDataSelector;
const updateSalesmanDataSelector = (state: TUseChat) =>
    state.updateSalesmanDataSelector;

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
    setInitSalesmanChatsSelector,
    setInitBuyerChatsSelector,
    initBuyerChatsSelector,
    initSalesmanChatsSelector,
    updateBuyerDataSelector,
    updateSalesmanDataSelector,
};
