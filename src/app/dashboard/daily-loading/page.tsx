'use client'

import React from 'react'
import Options from '@/app/_components/options'
import { projects } from '@/app/faker/data/projects'
import { Button } from '@/components/ui/button'

const DailyLoading = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-16 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Daily Loading Report
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 gap-4 px-4">
					<Options projects={projects} />
					<Button className="py-4 bg-midnight">Search</Button>
				</div>
			</div>
		</div>
	)
}

export default DailyLoading
