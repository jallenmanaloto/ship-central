import React from 'react'
import Sidebar from '@/app/_components/sidebar'
import Main from '../_components/Main'

const Dashboard = () => {
	return (
		<div className="flex h-screen w-screen bg-slate-200 overflow-hidden">
			<Sidebar />
			<Main />
		</div>
	)
}

export default Dashboard
