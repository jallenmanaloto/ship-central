'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Projects from '../../options/Projects'
import { projects } from '@/app/faker/data/projects'
import { Input } from '@/components/ui/input'

const CreateRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className="py-4 bg-sky-950 opacity-75">
				New vessel
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
						Create new vessel
					</Typography>
					<div className="mt-8 w-full py-3">
						<div className="flex">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Name</h2>
							</div>
							<div className="w-full">
								<Input />
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Cargo capacity</h2>
							</div>
							<div className="w-full">
								<Input />
							</div>
						</div>
					</div>
					{/* <div className="mt-1 w-full py-3">
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
					</div> */}
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
	return <>{action === 'create' ? <CreateRecord /> : ''}</>
}

export default CreateUpdate
