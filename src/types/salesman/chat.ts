import {
    TChatMessageConfirmActionProps,
    TChatMessageFailActionProps,
    TChatMessageItemProps,
    TChatMessageReviewCreatingProps,
    TChatMessageReviewProps,
    TChatMessageUserUploadedFile,
} from "../chat";
///////////////////////////////////////////////

export type TChatMessageSalesmanProps = {
    type: "salesman";
    message: Omit<TChatMessageItemProps, "name"> & { name?: string };
};
export type TChatMessageUserProps = {
    type: "user";
    message: TChatMessageItemProps;
};
export type TViewChatMessageGroupProps = {
    date: string;
    messages: (
        | TChatMessageUserUploadedFile
        | TChatMessageFailActionProps
        | TChatMessageReviewProps
        | TChatMessageSalesmanProps
        | TChatMessageUserProps
        | TChatMessageReviewCreatingProps
        | TChatMessageConfirmActionProps
    )[];
};
///////////////////////////////////////////////
