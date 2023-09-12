'use client'

import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import CreateUpdate from '../../modals/lct/CreateUpdate'
import { Lct } from '@prisma/client'
import MoreDetails from '../../accordion/lct/MoreDetails'

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

const LctCard = ({
	lct,
	projects,
}: {
	lct: Lct | null
	projects: ProjectsProps
}) => {
	return (
		<Card className="group h-fit ">
			<CardHeader>
				<div className="relative">
					<h2 className="text-base font-semibold text-neutral-800">
						{lct?.name}
					</h2>
					<CreateUpdate action="update" lct={lct} />
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
				<CardDescription>Cargo capacity: {lct?.cargoCapacity}</CardDescription>
			</CardHeader>
			<MoreDetails projects={projects} />
		</Card>
	)
}

export default LctCard
