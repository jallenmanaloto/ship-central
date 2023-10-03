'use client'

import Landing from './_components/landing'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import DashboardLoading from './_components/loading/DashboardLoading'

export default function Home() {
	const { status } = useSession()
	if (status === 'authenticated') redirect('/dashboard')

	return (
		<>
			{status === 'loading' ? (
				<div className="flex h-screen justify-center items-center">
					<DashboardLoading />
				</div>
			) : (
				<div>
					<Landing />
				</div>
			)}
		</>
	)
}
