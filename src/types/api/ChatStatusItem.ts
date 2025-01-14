
export type ChatStatus = "all" | "cancelled" | "pending" | "awaiting_receipt" | "on_confirmation" | "cashback_received" | "completed" | "archive";

type ChatStatusItem = {
    title: string;
    not_read: number;
    slug: ChatStatus;
}

export default ChatStatusItem;