'use client'

import Sidebar from '@/app/_components/sidebar'
import Header from '../_components/header'
import { useSession } from 'next-auth/react'
import DashboardLoading from '../_components/loading/DashboardLoading'
import { redirect } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
	const { status } = useSession()
	if (status === 'unauthenticated') redirect('/')

	return (
		<>
			{status === 'loading' ? (
				<div className="flex h-screen justify-center items-center">
					<DashboardLoading />
				</div>
			) : (
				<div>
					<Header />
					<Sidebar />
					<main>{children}</main>
				</div>
			)}
		</>
	)
}
