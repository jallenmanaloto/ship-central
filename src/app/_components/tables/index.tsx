import React from 'react'
import vesselAnalytics from '@/app/faker/data/analytics'

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

const Table = () => {
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
											<>
												<th key={idx} scope="col" className="px-6 py-4">
													{header}
												</th>
											</>
										)
									})}
								</tr>
							</thead>
							<tbody>
								{vesselAnalytics.map((vesselAnalytic, idx) => {
									return (
										<>
											<tr className="border-b odd:bg-neutral-100 even:bg-white dark:border-neutral-500 dark:bg-neutral-700">
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.name}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.laytime}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.laytimeAsOf}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.laytimeConsumed}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.totalCargo}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.totalCargoLoaded}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.totalCargoToBeLoaded}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.estDispatch}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.estTimeToCompleteLoading}
												</td>
												<td className="whitespace-nowrap px-6 py-4 font-medium">
													{vesselAnalytic.estTimeToFinish}
												</td>
											</tr>
										</>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Table
