'use client'

import React from 'react'
import Options from '@/app/_components/options'
import { projects } from '@/app/faker/data/projects'
import { Button } from '@/components/ui/button'
import Timeline from '@/app/_components/timeline'

const DailyLoading = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-16 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Daily Loading Report
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<Options projects={projects} />
					<div className="grid grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-none gap-4">
						<Button className="py-4 bg-midnight opacity-95">Search</Button>
						<Button className="py-4 bg-sky-950 opacity-75">New record</Button>
					</div>
				</div>
				<div className="pt-10 px-4">
					<Timeline />
				</div>
			</div>
		</div>
	)
}

export default DailyLoading