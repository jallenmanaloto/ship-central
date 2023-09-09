'use client'

import React, { useState } from 'react'
import vesselAnalytics from '@/app/faker/data/analytics'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const Content = () => {
	return (
		<>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Laytime:</h3>
				<h3 className="text-neutral-800 px-2">6.78</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Laytime as of:</h3>
				<h3 className="text-neutral-800 px-2">0.48</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Laytime consumed:</h3>
				<h3 className="text-neutral-800 px-2">8.04</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Total cargo:</h3>
				<h3 className="text-neutral-800 px-2">60,500</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Total cargo loaded:</h3>
				<h3 className="text-neutral-800 px-2">27,613.24</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">
					Total cargo to be loaded:
				</h3>
				<h3 className="text-neutral-800 px-2">32,886.76</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Est. dispatch:</h3>
				<h3 className="text-neutral-800 px-2">9.09</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">
					Est. time to complete loading:
				</h3>
				<h3 className="text-neutral-800 px-2">9.58</h3>
			</div>
			<div className="flex w-full">
				<h3 className="text-neutral-800 font-medium">Est. time to finish:</h3>
				<h3 className="text-neutral-800 px-2">9.58</h3>
			</div>
		</>
	)
}

const MoreDetails = () => {
	return (
		<>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>More details</AccordionTrigger>
					<AccordionContent>
						<Content />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	)
}

export default MoreDetails
