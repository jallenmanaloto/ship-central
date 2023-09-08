import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Textarea from '@mui/joy/Textarea'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import Projects from '../../options/Projects'
import { projects } from '@/app/faker/data/projects'
import dayjs from 'dayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

const DatePicker = () => {
	const currentDate = new Date()
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MobileDatePicker />
		</LocalizationProvider>
	)
}

const CreateRecord = () => {
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
						maxWidth: '350px',
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
							<h2 className="text-bottom w-24">Vessel:</h2>
							<div className="w-full">
								<Projects projects={projects} option="projectName" />
							</div>
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Project start:</h2>
							<DatePicker />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Project end:</h2>
							<DatePicker />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button className="bg-sky-950 opacity-75">Save</Button>
						<Button
							onClick={() => setOpen(false)}
							className="bg-red-950 opacity-75">
							Cancel
						</Button>
					</div>
				</Sheet>
			</Modal>
		</>
	)
}

const UpdateRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<svg
				onClick={() => setOpen(true)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-5 h-5 stroke-slate-600">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
				/>
			</svg>
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
						maxWidth: '350px',
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
						Update record
					</Typography>
					<div className="mt-8 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Activity start:</h2>
							<DatePicker />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Activity end:</h2>
							<DatePicker />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<h2 className="pb-2">Activity:</h2>
						<Textarea minRows={2} placeholder="Type activity.." />
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button className="bg-sky-950 opacity-75">Save</Button>
						<Button
							onClick={() => setOpen(false)}
							className="bg-red-950 opacity-75">
							Cancel
						</Button>
					</div>
				</Sheet>
			</Modal>
		</>
	)
}

const CreateUpdate = ({ action }: { action: string }) => {
	return <>{action === 'create' ? <CreateRecord /> : <UpdateRecord />}</>
}

export default CreateUpdate