import React from 'react'
import LctTabs from '@/app/_components/tabs/lct/LctTabs'

const Lct = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-56 px-6 bg-slate-200 overflow-y-scroll">
				<div className="relative py-5 px-4">
					<h1 className="text-xl text-neutral-800 font-bold">LCTs</h1>
					<LctTabs />
				</div>
			</div>
		</div>
	)
}

export default Lct
