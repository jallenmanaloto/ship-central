import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { ProjectProp } from '@/utils/types'
import dayjs from 'dayjs'

type ProjectsProps = {
	id: string
	lctId: string
	project: {
		id: string
		laytimeDays: number
		totalCargo: number
		cargoRate: number
		projectStartDate: string | null
		projectEndDate: string | null
		monitored: boolean
		createdAt: string
		updatedAt: string | null
		vesselId: string
		vesselName: string
	}
}[]

const MoreDetails = ({ projects }: { projects: ProjectsProps }) => {
	return (
		<div className="px-6">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Project Involvements</AccordionTrigger>
					<AccordionContent>
						{projects?.map((project, idx) => {
							return (
								<div key={idx} className="pb-3">
									<h4 className="text-sm text-neutral-800">
										{`${project?.project?.vesselName}`}
									</h4>
									<h5 className="text-sx text-neutral-500">{`(${dayjs(
										project?.project?.projectStartDate
									).format('MMM DD, YYYY')} - ${dayjs(
										project?.project?.projectEndDate
									).format('MMM DD, YYYY')})`}</h5>
								</div>
							)
						})}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default MoreDetails
