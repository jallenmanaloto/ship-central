import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useVesselStore } from '@/utils/store'

export default function VesselsPagination({
	totalPage,
}: {
	totalPage: number
}) {
	const { page, setVesselPage } = useVesselStore()
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setVesselPage(value)
	}

	return (
		<div className="flex justify-center w-full pt-8">
			<Pagination count={totalPage} page={page} onChange={handleChange} />
		</div>
	)
}
