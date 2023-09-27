'use client'

import React from 'react'
import { trpc } from '@/app/_trpc/client'
import { Analytics } from '@prisma/client'
import DetailsLoading from '../loading/DetailsLoading'

const headers = [
	'Name',
	'Laytime',
	'Laytime as of',
	'Laytime consumed',
	'Total cargo',
	'Total cargo loaded',
	'Total cargo to be loaded',
	'Est. dispatch',
	'Est. time to complete loading',
	'Est. time to finish',
]

type AnalyticsProps =
	| {
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
	  }[]
	| undefined

const Table = ({
	analytics,
	loading,
}: {
	analytics: AnalyticsProps
	loading: boolean
}) => {
	return (
		<div className="flex flex-col py-6">
			<div className="overflow-x-auto">
				<div className="inline-block min-w-full py-2">
					<div className="overflow-hidden">
						<table className="min-w-full text-left text-sm font-light rounded-md">
							<thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
								<tr>
									{headers.map((header, idx) => {
										return (
											<React.Fragment key={idx}>
												<th key={idx} scope="col" className="px-6 py-4">
													{header}
												</th>
											</React.Fragment>
										)
									})}
								</tr>
							</thead>
							<tbody>
								{loading ? (
									<tr>
										<td className="text-center pt-5" colSpan={10}>
											<DetailsLoading />
										</td>
									</tr>
								) : (
									analytics?.map((analytic, idx) => {
										return (
											<React.Fragment key={idx}>
												<tr className="border-b odd:bg-neutral-100 even:bg-white dark:border-neutral-500 dark:bg-neutral-700">
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.vesselName}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic?.laytime !== null
															? analytic?.laytime.toString()
															: '0'}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.layTimeAsOf}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.layTimeConsumed}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic?.totalCargo !== null
															? analytic?.totalCargo.toLocaleString()
															: 0}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic?.totalLoadedCargo !== null
															? analytic?.totalLoadedCargo.toLocaleString()
															: ''}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic?.totalCargoToBeLoaded !== null
															? analytic?.totalCargoToBeLoaded.toLocaleString()
															: ''}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.estDespatch}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.estTimeToFinishLoading}
													</td>
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														{analytic.estTotalTimeFinish}
													</td>
												</tr>
											</React.Fragment>
										)
									})
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Table
