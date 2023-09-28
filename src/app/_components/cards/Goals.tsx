import React from 'react'
import ProgressBar from '../progress'
import { vesselProgress } from '@/app/faker/data/goals'

const Goals = () => {
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<h1 className="mb-2 pb-2 text-lg font-semibold leading-tight md:text-xl text-neutral-600">
				Vessel Progress
			</h1>
			{vesselProgress.map((vessel, idx) => {
				return (
					<React.Fragment key={idx}>
						<ProgressBar
							key={idx}
							name={vessel.name}
							percentage={vessel.percentage}
						/>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default Goals
