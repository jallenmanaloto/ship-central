import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useProjectStore } from '@/utils/store'

export default function ProjectPagination({
	totalPage,
}: {
	totalPage: number
}) {
	const { page, setProjectPage } = useProjectStore()
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setProjectPage(value)
		console.log(value)
	}

	return (
		// <Stack spacing={2}>
		// 	<Typography>Page: {page}</Typography>
		// 	<Pagination count={10} page={page} onChange={handleChange} />
		// </Stack>
		<div className="flex justify-center w-full pt-8">
			<Pagination count={totalPage} page={page} onChange={handleChange} />
		</div>
	)
}
