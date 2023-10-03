'use client'

import React from 'react'
import ProgressBar from '../progress'
import { vesselProgress } from '@/app/faker/data/goals'
import { useAnalyticsStore } from '@/utils/store'

const Goals = () => {
	const { activeProjects } = useAnalyticsStore()

	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<h1 className="mb-2 pb-2 text-lg font-semibold leading-tight md:text-xl text-neutral-600">
				Vessel Progress
			</h1>
			{activeProjects?.map((project, idx) => {
				const totalCargo = project.totalCargo ?? 0
				const loadedCargo = parseInt(project.totalLoadedCargo ?? '0')
				const computed =
					totalCargo === 0 ? 0 : ((loadedCargo / totalCargo) * 100).toFixed(2)
				const percentage = computed.toString() + '%'

				return (
					<React.Fragment key={idx}>
						<ProgressBar
							key={idx}
							name={project.vesselName}
							percentage={percentage}
						/>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default Goals
