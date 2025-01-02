import type { Metadata } from 'next'
import '@/styles/index.scss'
import { QueryClientLayout } from '@/components/layouts/QueryClient'

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'

export const metadata: Metadata = {
	title: 'Платформа',
	description: 'Описание',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<QueryClientLayout>{children}</QueryClientLayout>
			</body>
		</html>
	)
}
