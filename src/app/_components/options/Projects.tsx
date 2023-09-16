'use client'

import React, { useState } from 'react'
import dayjs from 'dayjs'
import { trpc } from '@/app/_trpc/client'
import { useProjectStore } from '@/utils/store'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const ProjectNames = () => {
	const { data: vessels } = trpc.getVessels.useQuery({ vesselName: null })
	const { setChosenVesselId, chosenVesselId } = useProjectStore()
	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setChosenVesselId(newValue as string)
	}
	return (
		<Select onValueChange={(field) => setChosenVesselId(field)}>
			<SelectTrigger className="w-full bg-white outline-none">
				<SelectValue placeholder="Select a vessel" />
			</SelectTrigger>
			<SelectContent className="min-w-full">
				{vessels?.map((vessel, idx) => {
					return (
						<SelectItem key={idx} value={vessel.id}>
							{vessel.name}
						</SelectItem>
					)
				})}
			</SelectContent>
		</Select>
	)
}

const ProjectDates = () => {
	const { chosenVesselId } = useProjectStore()
	const { data: projects } = trpc.getProjects.useQuery(chosenVesselId)
	const isEmpty = projects?.length === 0

	const details = projects?.map(
		(project) =>
			`${dayjs(project.projectStartDate).format('MMM D, YYYY')} - ${dayjs(
				project.projectEndDate
			).format('MMM D, YYYY')}`
	)
	return (
		<Select disabled={isEmpty}>
			<SelectTrigger className="w-full bg-white outline-none">
				<SelectValue placeholder="Select project date" />
			</SelectTrigger>
			<SelectContent className="min-w-full">
				{details?.map((dates, idx) => {
					return (
						<SelectItem key={idx} value={dates}>
							{dates}
						</SelectItem>
					)
				})}
			</SelectContent>
		</Select>
	)
}

const Projects = ({ option }: { option: string }) => {
	return <>{option === 'projectName' ? <ProjectNames /> : <ProjectDates />}</>
}

export default Projects
