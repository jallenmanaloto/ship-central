import React from 'react'
import Sidebar from '@/app/_components/sidebar'
import Main from '../_components/Main'

const Dashboard = () => {
	return (
		<div className="flex h-screen max-h-screen w-screen">
			<Sidebar />
			<Main />
		</div>
	)
}

export default Dashboard
