import React from 'react'
import Table from '../tables'
import AnalysisCard from '../cards/AnalysisCard'
import vesselAnalytics from '../../../app/faker/data/analytics'

const index = () => {
	return (
		<div className="w-full grid grid-cols-1 px-10 pb-12">
			<div className="hidden md:block">
				<Table />
			</div>
			<div className="block md:hidden">
				<h2 className="font-semibold text-lg text-neutral-700 leading-5 pt-8 pb-6">
					Active Projects
				</h2>
				<div>
					{vesselAnalytics.map((analytic, idx) => {
						return <AnalysisCard key={idx} analysis={analytic} />
					})}
				</div>
			</div>
		</div>
	)
}

export default index
