import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Provider from './_trpc/Provider'
import 'tw-elements/dist/css/tw-elements.min.css'
import { NextAuthProvider } from './context/NextAuthProvider'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ship Central',
	description: "Ship Central to track your ships' progress",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<NextAuthProvider>
					<Provider>{children}</Provider>
				</NextAuthProvider>
			</body>
		</html>
	)
}
