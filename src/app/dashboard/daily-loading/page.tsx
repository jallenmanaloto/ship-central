'use client'

import React, { useState } from 'react'
import Options from '@/app/_components/options'
import { projects } from '@/app/faker/data/projects'
import { Button } from '@/components/ui/button'
import Timeline from '@/app/_components/timeline'
import MuiButton from '@mui/joy/Button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

const DatePicker = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker />
		</LocalizationProvider>
	)
}

const NewRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className="py-4 bg-sky-950 opacity-75">
				New record
			</Button>
			<Modal
				aria-labelledby="modal-title"
				aria-describedby="modal-desc"
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Sheet
					variant="outlined"
					sx={{
						width: '80%',
						maxWidth: '500px',
						borderRadius: 'md',
						p: 3,
						boxShadow: 'lg',
					}}>
					<ModalClose variant="plain" />
					<Typography
						component="h2"
						id="modal-title"
						level="h4"
						textColor="inherit"
						fontWeight="lg"
						mb={1}>
						Create new record
					</Typography>
					<div className="mt-8 w-full py-3">
						<div className="flex">
							<h2 className="text-bottom">Activity start:</h2>
							<DatePicker />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex">
							<h2 className="text-bottom">Activity end:</h2>
							<DatePicker />
						</div>
					</div>
				</Sheet>
			</Modal>
		</>
	)
}

const DailyLoading = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-16 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Daily Loading Report
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<Options projects={projects} />
					<div className="grid grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-none gap-4">
						<Button className="py-4 bg-midnight opacity-95">Search</Button>
						{/* <Button className="py-4 bg-sky-950 opacity-75">New record</Button> */}
						<NewRecord />
					</div>
				</div>
				<div className="pt-10 px-4">
					<Timeline />
				</div>
			</div>
		</div>
	)
}

export default DailyLoading
