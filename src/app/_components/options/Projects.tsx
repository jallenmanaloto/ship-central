'use client'

import React, { useState } from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import dayjs from 'dayjs'
import { ProjDetails } from '@/utils/types'
import { trpc } from '@/app/_trpc/client'

const ProjectNames = () => {
	const { data: vesselNames } = trpc.getVesselNames.useQuery()

	return (
		<Select placeholder="Choose a vessel">
			{vesselNames?.map((name, idx) => {
				return (
					<Option key={idx} value={name}>
						{name}
					</Option>
				)
			})}
		</Select>
	)
}

const ProjectDates = ({ details }: { details: string[] | [] }) => {
	const isEmpty = details.length === 0
	return (
		<Select placeholder="Choose a date" disabled={isEmpty}>
			{details.map((date, idx) => {
				return (
					<Option key={idx} value={date}>
						{date}
					</Option>
				)
			})}
		</Select>
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
