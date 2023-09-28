import React from 'react'
import Content from '../_components/home'

const Dashboard = () => {
	return (
		<div className="h-screen max-h-screen w-screen">
			<div className="h-screen pb-16 bg-slate-200 md:ml-[240px] overflow-y-scroll">
				<Content />
			</div>
		</div>
	)
}

export default Dashboard
