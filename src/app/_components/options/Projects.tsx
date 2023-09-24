'use client'

import React, { useState } from 'react'
import dayjs from 'dayjs'
import { trpc } from '@/app/_trpc/client'
import { useProjectStore } from '@/utils/store'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

const ProjectNames = () => {
	const { data: vessels } = trpc.getVessels.useQuery({ vesselName: null })
	const { setChosenVesselId, setStartDateSearch, setEndDateSearch } =
		useProjectStore()
	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setChosenVesselId(newValue as string)
		setStartDateSearch(null)
		setEndDateSearch(null)
	}
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
	)
}

interface ProjectsDetail {
	display: string
	vals: string
}

const ProjectDates = () => {
	const {
		chosenVesselId,
		setStartDateSearch,
		setEndDateSearch,
		startDateSearch,
		endDateSearch,
	} = useProjectStore()
	const projectData = {
		vesselId: chosenVesselId,
		projectStartDate: startDateSearch,
		projectEndDate: endDateSearch,
	}
	const { data: projects } = trpc.getProjects.useQuery(projectData)
	const [displayDate, setDisplayDate] = useState<string | null>()
	const isEmpty = projects?.length === 0

	let details: ProjectsDetail[] = []
	const projectsDetail = projects?.map((project) => {
		details.push({
			display: `${dayjs(project.projectStartDate).format(
				'MMM D, YYYY'
			)} - ${dayjs(project.projectEndDate).format('MMM D, YYYY')}`,
			vals: `${project.projectStartDate} - ${project.projectEndDate}`,
		})
	})

	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		const dates = newValue?.split(' - ')
		if (dates !== undefined) {
			setStartDateSearch(dates[0])
			setEndDateSearch(dates[1])
			setDisplayDate(newValue)
		}
	}
	return (
		<div>
			<Select
				value={displayDate}
				onChange={handleChange}
				placeholder="Choose date period"
				disabled={isEmpty}>
				{details?.map((dates, idx) => {
					return (
						<Option key={idx} value={dates.vals}>
							{dates.display}
						</Option>
					)
				})}
			</Select>
		</div>
	)
}

const Projects = ({ option }: { option: string }) => {
	return <>{option === 'projectName' ? <ProjectNames /> : <ProjectDates />}</>
}

export default Projects
