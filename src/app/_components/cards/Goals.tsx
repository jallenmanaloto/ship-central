import React from 'react'
import ProgressBar from '../progress'
import { vesselProgress } from '@/app/faker/data/goals'

const Goals = () => {
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
			<h2 className="mb-2 pb-2 text-xl font-semibold leading-tight md:text-4xl text-neutral-800 dark:text-neutral-50">
				Vessel Progress
			</h2>
			{vesselProgress.map((vessel) => {
				return (
					<>
						<ProgressBar name={vessel.name} percentage={vessel.percentage} />
					</>
				)
			})}
		</div>
	)
}

export default Goals
