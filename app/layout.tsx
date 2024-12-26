import type { Metadata } from 'next'
import '@/styles/index.scss'
import { QueryClientLayout } from '@/components/layouts/QueryClient'

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
