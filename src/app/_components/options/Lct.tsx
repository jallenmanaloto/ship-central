import React from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { useLctStore } from '@/utils/store'

interface LctList {
	display: string
	vals: string
}
;[]

const Lct = ({ lctList }: { lctList: LctList[] }) => {
	const { setLctTripFromLct } = useLctStore()
	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setLctTripFromLct(newValue as string)
	}

	return (
		<Select onChange={handleChange} placeholder="Choose a vessel">
			{lctList.map((lct, idx) => {
				return (
					<Option key={idx} value={lct.vals}>
						{lct.display}
					</Option>
				)
			})}
		</Select>
	)
}

export default Lct
