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
    message: TChatMessageItemProps;
};
export type TChatMessageUserProps = {
    type: "user";
    message: Omit<TChatMessageItemProps, "name"> & { name?: string };
};
export type TChatMessageUploadFormProps = {
    type: "upload-form";
    message: undefined;
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
        | TChatMessageUploadFormProps
    )[];
};
///////////////////////////////////////////////
