'use client'

import React, { useState } from 'react'
import { trpc } from '@/app/_trpc/client'
import { useProjectStore } from '@/utils/store'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

const ProjectNames = () => {
	const { data: vessels } = trpc.getVessels.useQuery({ vesselName: null })
	const { setChosenVesselId } = useProjectStore()

	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setChosenVesselId(newValue as string)
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

const ProjectDates = () => {
	const {
		chosenVesselId,
		setStartDateSearch,
		setEndDateSearch,
		startDateSearch,
		endDateSearch,
	} = useProjectStore()

	const { data: projectDates } = trpc.getProjectDates.useQuery(chosenVesselId)

	const [displayDate, setDisplayDate] = useState<string | null>()
	const isEmpty = projectDates?.length === 0

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
				{projectDates?.map((dates, idx) => {
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
