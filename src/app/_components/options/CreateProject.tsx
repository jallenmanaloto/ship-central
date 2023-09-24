import React from 'react'
import { useProjectStore } from '@/utils/store'
import { trpc } from '@/app/_trpc/client'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

const CreateProject = () => {
	const {
		setStartDateSearch,
		setEndDateSearch,
		setProjectPage,
		setChosenVesselIdForCreate,
	} = useProjectStore()
	const { data: vessels } = trpc.getVessels.useQuery({ vesselName: null })

	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setChosenVesselIdForCreate(newValue as string)
		setStartDateSearch(null)
		setEndDateSearch(null)
		setProjectPage(1)
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

export default CreateProject
