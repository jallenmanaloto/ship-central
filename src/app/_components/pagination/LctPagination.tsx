import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useLctStore } from '@/utils/store'

export default function LctPagination({ totalPage }: { totalPage: number }) {
	const { page, setLctPage } = useLctStore()
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setLctPage(value)
	}

	return (
		<div className="flex justify-center w-full pt-8">
			<Pagination count={totalPage} page={page} onChange={handleChange} />
		</div>
	)
}
