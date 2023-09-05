import Sidebar from '@/app/_components/sidebar'
import Header from '../_components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<Sidebar />
			<main>{children}</main>
		</>
	)
}
