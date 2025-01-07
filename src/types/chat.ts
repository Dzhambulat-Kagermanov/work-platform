export type TChatPlaqueProps = {
    id: number;
    avatar: string;
    isOnline: boolean;
    productName: string;
    lastMessage?: string;
    lastOnlineTime: string;
    newMessagesQnt?: number;
};
export type TChatMessageItemProps = {
    id: number;
    avatar: string;
    name?: string;
    message: string;
    messageGotTime: string;
};
export type TChatMessageReviewProps = {
    type: "review";
    message: {
        rating: number;
        description: string;
    };
};
export type TChatMessageUserUploadedFile = {
    type: "uploaded-file";
    message: {
        userInfo: {
            name: string;
            avatarImage: string;
        };
        files: {
            name: string;
            size: string;
            fileURL: string;
        }[];
    };
};
export type TChatMessageReviewCreatingProps = {
    type: "review-creating";
    message: undefined;
};
export type TChatMessageConfirmActionProps = {
    type: "confirm-action";
    message: string;
};
export type TChatMessageFailActionProps = {
    type: "fail-action";
    message: string;
};
