import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useDailyLoadingStore, useLctStore } from '@/utils/store'

export default function DailyLoadingPagination({
	totalPage,
}: {
	totalPage: number
}) {
	const { page, setPage } = useDailyLoadingStore()
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	return (
		<div className="flex justify-center w-full pt-8">
			<Pagination count={totalPage} page={page} onChange={handleChange} />
		</div>
	)
}
