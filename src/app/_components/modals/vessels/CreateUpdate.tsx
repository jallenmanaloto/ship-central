'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { Input } from '@/components/ui/input'
import { trpc } from '@/app/_trpc/client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { TVessel } from '@/utils/types'

const CreateRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [creating, setCreating] = useState<boolean>(false)

	const [vesselDetails, setVesselDetails] = useState({
		name: '',
		totalCargoLoad: '',
	})
	const utils = trpc.useContext()
	const vessel = trpc.createVessel.useMutation({
		onSuccess: () => {
			utils.getPaginatedVessels.invalidate()
		},
		onSettled: () => {
			setCreating(false)
			setOpen(false)
			setVesselDetails({
				name: '',
				totalCargoLoad: '',
			})
		},
	})

	const handleCreateVessel = () => {
		vessel.mutate(vesselDetails)
		setCreating(true)
	}

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className="py-4 bg-sky-950 opacity-75 w-full">
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
								<Input
									value={vesselDetails.name}
									onChange={(e) =>
										setVesselDetails({ ...vesselDetails, name: e.target.value })
									}
								/>
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Cargo capacity</h2>
							</div>
							<div className="w-full">
								<Input
									value={vesselDetails.totalCargoLoad}
									onChange={(e) =>
										setVesselDetails({
											...vesselDetails,
											totalCargoLoad: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button
							onClick={handleCreateVessel}
							className="bg-sky-950 opacity-75">
							{creating ? (
								<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Save'
							)}
						</Button>
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

const UpdateRecord = ({ vessel }: { vessel: TVessel }) => {
	const utils = trpc.useContext()
	const [open, setOpen] = useState<boolean>(false)
	const [updating, setUpdating] = useState<boolean>(false)
	const [vesselDetails, setVesselDetails] = useState({
		id: '',
		name: '',
		totalCargoLoad: '',
	})

	const updateVessel = trpc.updateVessel.useMutation({
		onSuccess: () => {
			utils.getPaginatedVessels.invalidate()
		},
		onSettled: () => {
			setUpdating(false)
			setOpen(false)
			setVesselDetails({
				id: '',
				name: '',
				totalCargoLoad: '',
			})
		},
	})

	const handleOpen = () => {
		setOpen(true)
		setVesselDetails({
			id: vessel.id,
			name: vessel.name,
			totalCargoLoad: String(vessel.totalCargoLoad),
		})
	}

	const handleUpdateVessel = () => {
		updateVessel.mutate(vesselDetails)
		setUpdating(true)
	}
	return (
		<>
			<svg
				onClick={() => handleOpen()}
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
						Update vessel
					</Typography>
					<div className="mt-8 w-full py-3">
						<div className="flex">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Name</h2>
							</div>
							<div className="w-full">
								<Input
									value={vesselDetails.name}
									onChange={(e) =>
										setVesselDetails({ ...vesselDetails, name: e.target.value })
									}
								/>
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Cargo capacity</h2>
							</div>
							<div className="w-full">
								<Input
									value={vesselDetails.totalCargoLoad}
									onChange={(e) =>
										setVesselDetails({
											...vesselDetails,
											totalCargoLoad: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button
							onClick={handleUpdateVessel}
							className="bg-sky-950 opacity-75">
							{updating ? (
								<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Save'
							)}
						</Button>
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

const CreateUpdate = ({
	action,
	vessel,
}: {
	action: string
	vessel: TVessel | null
}) => {
	return (
		<>
			{action === 'create' ? (
				<CreateRecord />
			) : (
				//@ts-ignore
				<UpdateRecord vessel={vessel} />
			)}
		</>
	)
}

export default CreateUpdate
