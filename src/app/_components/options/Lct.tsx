import React from 'react'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

const Lct = ({ lctNames }: { lctNames: string[] }) => {
	return (
		<Select placeholder="Choose a vessel">
			{lctNames.map((name, idx) => {
				return (
					<Option key={idx} value={name}>
						{name}
					</Option>
				)
			})}
		</Select>
	)
}

export default Lct
