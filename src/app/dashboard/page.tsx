import React from 'react'
import Header from '@/app/_components/header'
import Sidebar from '@/app/_components/sidebar'
import MobileNav from '../_components/sidebar/MobileNav'

const Dashboard = () => {
	return (
		<div className="flex h-screen w-screen bg-slate-200 overflow-hidden">
			<div className="hidden lg:block">
				<Sidebar />
			</div>
			<div className="block md:hidden">
				<MobileNav />
			</div>
			<Header />
		</div>
	)
}

export default Dashboard
