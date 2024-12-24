'use client'
import { TChildren } from '@/shared/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

interface Props extends TChildren {}
const QueryClientLayout: FC<Props> = ({ children }) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export { QueryClientLayout }
