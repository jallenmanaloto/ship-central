import Sidebar from '@/app/_components/sidebar'
import Header from '../_components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />
			<Header />
			<main>{children}</main>
		</>
	)
}
