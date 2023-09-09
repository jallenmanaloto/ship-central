import React from 'react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LctSearch from '../../search/LctSearch'
import CreateUpdate from '../../modals/lct/CreateUpdate'
import MoreDetails from '../../accordion/lct/MoreDetails'
import Trips from '../../accordion/lct/Trips'

//Transfer this to a separate card file component
const SampleCards = () => {
	return (
		<Card className="group">
			<CardHeader>
				<div className="relative">
					<h2 className="text-base font-semibold text-neutral-800">
						Sample LCT
					</h2>
					<CreateUpdate action="update" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="absolute right-0 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</div>
				<CardDescription>Cargo capacity: 5000</CardDescription>
			</CardHeader>
			<MoreDetails />
		</Card>
	)
}
//Transfer this to a separate card file component
const SampleTripCard = () => {
	return (
		<Card className="group">
			<CardHeader>
				<div className="relative">
					<h2 className="text-base font-semibold text-neutral-800">LCT# 1</h2>
					<CreateUpdate action="update" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="absolute right-0 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</div>
				<CardDescription className="max-w-[180px]">
					{`MV XIN HAI MING ZHU (09/01/2023 - 09/15/2023)`}
				</CardDescription>
				<Trips />
			</CardHeader>
		</Card>
	)
}

const LctTabs = () => {
	return (
		<div className="pt-5 w-full">
			<Tabs defaultValue="LCT" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger className="font-bold" value="LCT">
						LCTs
					</TabsTrigger>
					<TabsTrigger className="font-bold" value="Trips">
						Trips
					</TabsTrigger>
				</TabsList>
				<TabsContent value="LCT">
					{/* Content#1 here */}
					<LctSearch type="lct" />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<SampleCards />
						<SampleCards />
						<SampleCards />
						<SampleCards />
						<SampleCards />
					</div>
				</TabsContent>
				<TabsContent value="Trips">
					{/* Content#2 here */}
					<LctSearch type="lctTrip" />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<SampleTripCard />
						<SampleTripCard />
						<SampleTripCard />
						<SampleTripCard />
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default LctTabs
