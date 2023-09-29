'use client'

import React, { useEffect } from 'react'
import Table from '../tables'
import AnalysisCard from '../cards/AnalysisCard'
import { trpc } from '@/app/_trpc/client'
import { useAnalyticsStore } from '@/utils/store'

const index = () => {
	const { setActiveProjects } = useAnalyticsStore()
	const { data: activeAnalytics, isLoading } =
		trpc.getActiveAnalytics.useQuery()

	useEffect(() => {
		setActiveProjects(activeAnalytics)
	}, [activeAnalytics])

	return (
		<div className="w-full grid grid-cols-1 px-10 pb-12">
			<div className="hidden md:block">
				<Table analytics={activeAnalytics} loading={isLoading} />
			</div>
			<div className="block md:hidden">
				<h2 className="font-semibold text-lg text-neutral-700 leading-5 pt-8 pb-6">
					Active Projects
				</h2>
				<div>
					{activeAnalytics?.map((analytic, idx) => {
						return <AnalysisCard key={idx} analytics={analytic} />
					})}
				</div>
			</div>
		</div>
	)
}

export default index
