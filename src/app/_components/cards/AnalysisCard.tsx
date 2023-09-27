'use client'

import React from 'react'

type AnalyticsProps = {
	vesselName: string
	id: string
	projectId: string | null
	monitored: boolean | null
	totalCargo: number | null
	laytime: string | null
	layTimeAsOf: number | null
	layTimeConsumed: number | null
	totalCargoToBeLoaded: string | null
	totalLoadedCargo: string | null
	estDespatch: number | null
	estTimeToFinishLoading: number | null
	estTotalTimeFinish: number | null
}

const AnalysisCard = ({ analytics }: { analytics: AnalyticsProps }) => {
	return (
		<div className="block rounded-lg bg-white p-6 mb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<h2 className="w-full text-xl font-bold text-neutral-800">
				{analytics.vesselName}
			</h2>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Laytime:</h3>
				<h3 className="text-center">{analytics.laytime}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Laytime as of:</h3>
				<h3 className="text-center">{analytics.layTimeAsOf}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Laytime consumed:
				</h3>
				<h3 className="text-center">{analytics.layTimeConsumed}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Total cargo:</h3>
				<h3 className="text-center">
					{analytics?.totalCargo !== null
						? analytics?.totalCargo.toLocaleString()
						: 0}
				</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Total cargo loaded:
				</h3>
				<h3 className="text-center">
					{analytics?.totalLoadedCargo !== null
						? parseFloat(analytics?.totalLoadedCargo).toLocaleString()
						: ''}
				</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Total cargo to be loaded:
				</h3>
				<h3 className="text-center">
					{analytics?.totalCargoToBeLoaded !== null
						? parseFloat(analytics?.totalCargoToBeLoaded).toLocaleString()
						: ''}
				</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Est. despatch:</h3>
				<h3 className="text-center">{analytics.estDespatch}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">
					Est. time to complete loading:
				</h3>
				<h3 className="text-center">{analytics.estTimeToFinishLoading}</h3>
			</div>
			<div className="flex-col mt-3 py-1 text-base text-neutral-600">
				<h3 className="text-center text-base font-semibold">Est. finish:</h3>
				<h3 className="text-center">{analytics.estTotalTimeFinish}</h3>
			</div>
		</div>
	)
}

export default AnalysisCard
