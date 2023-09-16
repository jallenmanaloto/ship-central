'use client'

import React, { useState } from 'react'
import dayjs from 'dayjs'
import { ProjDetails } from '@/utils/types'
import { trpc } from '@/app/_trpc/client'
import { useCreateProjectStore } from '@/utils/store'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select'

const ProjectNames = () => {
	const { data: vessels } = trpc.getVessels.useQuery({ vesselName: null })
	const { setChosenVesselId, chosenVesselId } = useCreateProjectStore()
	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setChosenVesselId(newValue as string)
	}

	// console.log(chosenVesselId)
	return (
		<Select onChange={handleChange} placeholder="Choose a vessel">
			{vessels?.map((vessel, idx) => {
				return (
					<Option key={idx} value={vessel.id}>
						{vessel.name}
					</Option>
				)
			})}
		</Select>
		// <Select onValueChange={(field) => setChosenVesselId(field)}>
		// 	<SelectTrigger className="w-full bg-white outline-none">
		// 		<SelectValue placeholder="Select a vessel" />
		// 	</SelectTrigger>
		// 	<SelectContent className="min-w-full">
		// 		{vessels?.map((vessel, idx) => {
		// 			return (
		// 				<SelectItem key={idx} value={vessel.id}>
		// 					{vessel.name}
		// 				</SelectItem>
		// 			)
		// 		})}
		// 	</SelectContent>
		// </Select>
	)
}

const ProjectDates = ({ details }: { details: string[] | [] }) => {
	const isEmpty = details.length === 0
	return (
		<></>
		// <Select disabled={isEmpty}>
		// 	<SelectTrigger className="w-full bg-white outline-none">
		// 		<SelectValue placeholder="Select project date" />
		// 	</SelectTrigger>
		// 	<SelectContent className="min-w-full">
		// 		{details?.map((dates, idx) => {
		// 			return (
		// 				<SelectItem key={idx} value={dates}>
		// 					{dates}
		// 				</SelectItem>
		// 			)
		// 		})}
		// 	</SelectContent>
		// </Select>
	)
}

const Projects = ({
	projects,
	option,
}: {
	projects: ProjDetails
	option: string
}) => {
	const [selectedValue, setSelectedValue] = useState('')
	let details: string[] = []

	if (option === 'projectName') {
		details = projects.map((project) => project.name)
	} else {
		details = projects.map(
			(project) =>
				`${dayjs(project.projectStartDate).format('MMM D, YYYY')} - ${dayjs(
					project.projectEndDate
				).format('MMM D, YYYY')}`
		)
	}
	return (
		<>
			{option === 'projectName' ? (
				<ProjectNames />
			) : (
				<ProjectDates details={details} />
			)}
		</>
	)
}

export default Projects
