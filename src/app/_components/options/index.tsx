'use client'

import React, { useState } from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import dayjs from 'dayjs'
import { trpc } from '@/app/_trpc/client'
import { useDailyLoadingStore } from '@/utils/store'

const Options = () => {
	const { setDailyLoadingProjectIdForSearch } = useDailyLoadingStore()
	const { data: projects } = trpc.getProjects.useQuery({
		vesselId: null,
		projectEndDate: null,
		projectStartDate: null,
	})

	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setDailyLoadingProjectIdForSearch(newValue)
	}

	return (
		<Select onChange={handleChange} placeholder="Choose project">
			{projects?.map((project, idx) => {
				const startDate = dayjs(project.projectStartDate).format('D/MMM/YY')
				const endDate = dayjs(project.projectEndDate).format('D/MMM/YY')
				return (
					<Option
						key={idx}
						value={
							project.id
						}>{`${project.vesselName} (${startDate} - ${endDate})`}</Option>
				)
			})}
		</Select>
	)
}

export default Options
