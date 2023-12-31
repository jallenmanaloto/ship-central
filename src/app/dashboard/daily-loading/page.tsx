'use client'

import React from 'react'
import Options from '@/app/_components/options'
import { Button } from '@/components/ui/button'
import Timeline from '@/app/_components/timeline'
import CreateUpdate from '@/app/_components/modals/daily-loading/CreateUpdate'
import { useDailyLoadingStore } from '@/utils/store'

const DailyLoading = () => {
	const { setDailyLoadingProjectId, dailyLoadingProjectIdForSearch } =
		useDailyLoadingStore()
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-32 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Daily Loading Report
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<Options />
					<div className="grid grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-none gap-4">
						<Button
							onClick={() =>
								setDailyLoadingProjectId(dailyLoadingProjectIdForSearch)
							}
							className="py-4 bg-midnight opacity-95">
							Search
						</Button>
						<CreateUpdate action="create" />
					</div>
				</div>
				<div className="pt-10 pb-5 px-4">
					<Timeline />
				</div>
			</div>
		</div>
	)
}

export default DailyLoading
