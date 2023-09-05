import React from 'react'
import Content from '../_components/home'

const Dashboard = () => {
	return (
		<div className="flex h-screen max-h-screen w-screen">
			<div className="w-screen h-screen pb-16 bg-slate-200 overflow-y-scroll">
				<Content />
			</div>
		</div>
	)
}

export default Dashboard
