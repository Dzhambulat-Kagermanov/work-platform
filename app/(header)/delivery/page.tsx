import { DeliveryPage } from '@/components/page/Delivery'
import { TChatType } from '@/components/widgets/DeliverySidebar/types'
import { FC } from 'react'

interface Props {
	searchParams: Promise<{ chatType: TChatType }>
}
const Delivery: FC<Props> = async ({ searchParams }) => {
	const { chatType } = await searchParams

	return <DeliveryPage chatType={chatType} />
}

export default Delivery
