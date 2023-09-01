import React from 'react'
import Sidebar from '@/app/_components/sidebar'
import Main from '../_components/Main'

const Dashboard = () => {
	return (
		<div className="flex h-screen w-screen overflow-hidden">
			<Sidebar />
			<Main />
		</div>
	)
}

export default Dashboard
