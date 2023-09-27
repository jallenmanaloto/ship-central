'use client'

import React, { useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { trpc } from '@/app/_trpc/client'
import DetailsLoading from '../../loading/DetailsLoading'

const Content = ({ projectId }: { projectId: string }) => {
	const { data: analytic, isLoading } = trpc.getAnalytic.useQuery(projectId)

	return (
		<>
			{isLoading ? (
				<DetailsLoading />
			) : analytic === null ? (
				<h4 className="text-center text-slate-500">No data to show</h4>
			) : (
				<div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">Laytime:</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.laytime !== null ? analytic?.laytime : 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">Laytime as of:</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.layTimeAsOf !== null ? analytic?.layTimeAsOf : 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">Laytime consumed:</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.layTimeConsumed !== null
								? analytic?.layTimeConsumed
								: 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">Total cargo:</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.totalCargo !== null
								? analytic?.totalCargo.toLocaleString()
								: 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">
							Total cargo loaded:
						</h3>
						<h3 className="text-neutral-800 px-2">
							{parseFloat(analytic?.totalLoadedCargo ?? '').toLocaleString() ??
								'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">
							Total cargo to be loaded:
						</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.totalCargoToBeLoaded !== null
								? parseFloat(
										analytic?.totalCargoToBeLoaded ?? ''
								  ).toLocaleString()
								: 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">Est. despatch:</h3>
						<h3 className="text-neutral-800 px-2">{analytic?.estDespatch}</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">
							Est. time to complete loading:
						</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.estTimeToFinishLoading !== null
								? analytic?.estTimeToFinishLoading
								: 'N/A'}
						</h3>
					</div>
					<div className="flex w-full">
						<h3 className="text-neutral-800 font-medium">
							Est. time to finish:
						</h3>
						<h3 className="text-neutral-800 px-2">
							{analytic?.estTotalTimeFinish !== null
								? analytic?.estTotalTimeFinish
								: 'N/A'}
						</h3>
					</div>
				</div>
			)}
		</>
	)
}

const MoreDetails = ({ projectId }: { projectId: string }) => {
	return (
		<>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>More details</AccordionTrigger>
					<AccordionContent>
						<Content projectId={projectId} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	)
}

export default MoreDetails
