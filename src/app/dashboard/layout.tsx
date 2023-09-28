'use client'

import Sidebar from '@/app/_components/sidebar'
import Header from '../_components/header'
import { useSession } from 'next-auth/react'
import DashboardLoading from '../_components/loading/DashboardLoading'

export default function Layout({ children }: { children: React.ReactNode }) {
	const { status } = useSession()

	if (status === 'loading')
		return (
			<div className="flex h-screen justify-center items-center">
				<DashboardLoading />
			</div>
		)
	return (
		<>
			<Header />
			<Sidebar />
			<main>{children}</main>
		</>
	)
}
