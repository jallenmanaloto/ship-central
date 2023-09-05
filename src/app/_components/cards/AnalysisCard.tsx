import vesselAnalytics from '@/app/faker/data/analytics'
import React from 'react'

type AnalysisProps = {
	name: string
	laytime: number
	laytimeAsOf: number
	laytimeConsumed: number
	totalCargo: number
	totalCargoLoaded: number
	totalCargoToBeLoaded: number
	estDispatch: number
	estTimeToCompleteLoading: number
	estTimeToFinish: number
}

const AnalysisCard = ({ analysis }: { analysis: AnalysisProps }) => {
	return (
		<div className="block rounded-lg bg-white p-6 mb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<h2 className="w-full text-xl font-bold text-neutral-800">
				{analysis.name}
			</h2>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Laytime:</h3>
				<h3 className="text-center">{analysis.laytime}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Laytime as of:</h3>
				<h3 className="text-center">{analysis.laytimeAsOf}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Laytime consumed:
				</h3>
				<h3 className="text-center">{analysis.laytimeConsumed}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Total cargo:</h3>
				<h3 className="text-center">{analysis.totalCargo}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Total cargo loaded:
				</h3>
				<h3 className="text-center">{analysis.totalCargoLoaded}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Total cargo to be loaded:
				</h3>
				<h3 className="text-center">{analysis.totalCargoToBeLoaded}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Est. despatch:</h3>
				<h3 className="text-center">{analysis.estDispatch}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Est. time to complete loading:
				</h3>
				<h3 className="text-center">{analysis.estTimeToCompleteLoading}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Est. finish:</h3>
				<h3 className="text-center">{analysis.estTimeToFinish}</h3>
			</div>
		</div>
	)
}

export default AnalysisCard
