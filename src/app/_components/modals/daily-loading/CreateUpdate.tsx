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

const DatePicker = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker />
		</LocalizationProvider>
	)
}

const CreateUpdate = ({ action }: { action: string }) => {
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
						{action === 'update' ? 'Update record' : 'Create new record'}
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

export default CreateUpdate
