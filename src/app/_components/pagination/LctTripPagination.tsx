import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useLctStore } from '@/utils/store'

export default function LctTripPagination({
	totalPage,
}: {
	totalPage: number
}) {
	const { tripPage, setLctTripPage } = useLctStore()
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setLctTripPage(value)
	}

	return (
		<div className="flex justify-center w-full pt-8">
			<Pagination count={totalPage} page={tripPage} onChange={handleChange} />
		</div>
	)
}
