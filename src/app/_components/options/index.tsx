import React from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import dayjs from 'dayjs'

type ProjDetails = {
	name: string
	projectStartDate: Date
	projectEndDate: Date
}[]

const Options = ({ projects }: { projects: ProjDetails }) => {
	return (
		<Select>
			<SelectTrigger className="w-full border-2 border-neutral-900 border-opacity-50">
				<SelectValue placeholder="Select a Project" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Projects</SelectLabel>
					{projects.map((project, idx) => {
						const startDate = dayjs(project.projectStartDate).format('D-MMM-YY')
						const endDate = dayjs(project.projectEndDate).format('D-MMM-YY')
						return (
							<SelectItem
								key={idx}
								value="apple">{`${project.name} (${startDate} - ${endDate})`}</SelectItem>
						)
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default Options
