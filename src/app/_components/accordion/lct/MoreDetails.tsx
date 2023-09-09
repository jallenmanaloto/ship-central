import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const MoreDetails = () => {
	return (
		<div className="px-6">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Project Involvements</AccordionTrigger>
					<AccordionContent>Additional Details</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default MoreDetails
