import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const SampleTrips = () => {
	return (
		<>
			<h2>Trip #1: 4500</h2>
			<h2>Trip #2: 5000</h2>
			<h2>Trip #3: 3725</h2>
			<h2>Trip #4: 1280</h2>
		</>
	)
}

const Trips = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Trips</AccordionTrigger>
				<AccordionContent>
					<SampleTrips />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default Trips
