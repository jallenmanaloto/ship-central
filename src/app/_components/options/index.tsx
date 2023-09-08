import React, { useState } from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import dayjs from 'dayjs'
import { ProjDetails } from '@/utils/types'

const Options = ({ projects }: { projects: ProjDetails }) => {
	const [selectedValue, setSelectedValue] = useState('')
	return (
		<Select placeholder="Choose project">
			{projects.map((project, idx) => {
				const startDate = dayjs(project.projectStartDate).format('D/MMM/YY')
				const endDate = dayjs(project.projectEndDate).format('D/MMM/YY')
				return (
					<Option
						key={idx}
						value={
							project.name
						}>{`${project.name} (${startDate} - ${endDate})`}</Option>
				)
			})}
		</Select>
	)
}

export default Options
