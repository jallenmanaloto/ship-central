import React from 'react'
import Header from '@/app/_components/header'
import Sidebar from '@/app/_components/sidebar'

const Dashboard = () => {
	return (
		<div className="flex h-screen w-screen bg-slate-200 overflow-hidden">
			<Sidebar />
			<Header />
		</div>
	)
}

export default Dashboard
