import type { Metadata } from 'next'
import '@/app/styles/index.scss'

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
			<body>{children}</body>
		</html>
	)
}
