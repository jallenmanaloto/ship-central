'use client'

import React from 'react'
import Content from '../_components/home'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Dashboard = () => {
	const { data: session } = useSession()
	console.log(session)
	return (
		<div className="h-screen max-h-screen w-screen">
			<div className="h-screen pb-16 bg-slate-200 md:ml-[240px] overflow-y-scroll">
				<Content />
			</div>
		</div>
	)
}

export default Dashboard
