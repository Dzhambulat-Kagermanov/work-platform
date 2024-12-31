export type TChatPlaqueProps = {
	id: number
	avatar: string
	isOnline: boolean
	productName: string
	lastMessage?: string
	lastOnlineTime: string
	newMessagesQnt?: number
}

///////////////////////////////////////////////
export type TChatMessageItemProps = {
	id: number
	avatar: string
	name?: string
	message: string
	messageGotTime: string
}

export type TChatMessageReviewProps = {
	type: 'review'
	message: {
		rating: number
		description: string
	}
}
export type TChatMessageSalesmanProps = {
	type: 'salesman'
	message: TChatMessageItemProps
}
export type TChatMessageUserProps = {
	type: 'user'
	message: Omit<TChatMessageItemProps, 'name'> & { name?: string }
}
export type TChatMessageReviewCreatingProps = {
	type: 'review-creating'
	message: undefined
}
export type TChatMessageConfirmActionProps = {
	type: 'confirm-action'
	message: string
}
export type TChatMessageFailActionProps = {
	type: 'fail-action'
	message: string
}
export type TViewChatMessageGroupProps = {
	date: string
	messages: (
		| TChatMessageFailActionProps
		| TChatMessageReviewProps
		| TChatMessageSalesmanProps
		| TChatMessageUserProps
		| TChatMessageReviewCreatingProps
		| TChatMessageConfirmActionProps
	)[]
}
///////////////////////////////////////////////
