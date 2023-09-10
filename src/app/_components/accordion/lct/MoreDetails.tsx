import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { ProjectProp } from '@/utils/types'
import dayjs from 'dayjs'

const MoreDetails = ({ project }: { project: ProjectProp }) => {
	return (
		<div className="px-6">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Project Involvements</AccordionTrigger>
					<AccordionContent>
						<h4 className="text-sm text-neutral-800">
							{`${project.vesselName} (${dayjs(project.projectStartDate).format(
								'MMM DD, YYYY'
							)} - ${dayjs(project.projectEndDate).format('MMM DD, YYYY')})`}
						</h4>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default MoreDetails
