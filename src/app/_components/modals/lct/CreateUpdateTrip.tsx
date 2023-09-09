'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { Input } from '@/components/ui/input'
import Lct from '../../options/Lct'
import { projects } from '@/app/faker/data/projects'
import dayjs from 'dayjs'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

const lctNames = ['LCT #1', 'LCT #2', 'LCT #3', 'LCT #4']

const CreateRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	const projectList = projects.map((project) => {
		return `${project.name} (${dayjs(project.projectStartDate).format(
			'DD/MM/YYYY'
		)} - ${dayjs(project.projectEndDate).format('DD/MM/YYYY')})`
	})
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className="py-4 bg-sky-950 opacity-75">
				New Trip
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
						Create new trip
					</Typography>
					<div className="mt-8 w-full py-3">
						<div className="flex">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Project</h2>
							</div>
							<div className="w-full overflow-hidden">
								<Select>
									{projectList.map((project, idx) => {
										return (
											<Option key={idx} value={project}>
												{project}
											</Option>
										) //Needs to use projectId as the value
									})}
								</Select>
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">LCT</h2>
							</div>
							<div className="w-full overflow-hidden">
								<Lct lctNames={lctNames} />
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Cargo load</h2>
							</div>
							<div className="w-full">
								<Input />
							</div>
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
		<div className="group top-0 right-4">
			<svg
				onClick={() => setOpen(true)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="absolute right-7 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
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
						Update LCT
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
		</div>
	)
}

const CreateUpdateTrip = ({ action }: { action: string }) => {
	return <>{action === 'create' ? <CreateRecord /> : <UpdateRecord />}</>
}

export default CreateUpdateTrip
