import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { LctTrips } from '@prisma/client'

type Trips = {
	id: string
	projectId: string
	cargoLoad: number
	lctId: string
	createdAt: string | null
	updatedAt: string | null
	tripToVessel: string
}[]

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

const Trips = ({ trips }: { trips: Trips }) => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Trips</AccordionTrigger>
				<AccordionContent>
					{trips.map((trip, idx) => {
						const tripNumber = idx + 1
						return (
							<h2 key={idx}>
								Trip #{tripNumber}: {trip.cargoLoad} tonnes
							</h2>
						)
					})}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default Trips
