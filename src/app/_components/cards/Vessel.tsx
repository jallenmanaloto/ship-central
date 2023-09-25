import React, { useState } from 'react'
import CreateUpdate from '../modals/vessels/CreateUpdate'
import { TVessel } from '@/utils/types'
import { trpc } from '@/app/_trpc/client'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'

const ConfirmDelete = ({ vesselId }: { vesselId: string }) => {
	const [open, setOpen] = useState(false)
	const [deleting, setDeleting] = useState(false)
	const utils = trpc.useContext()
	const deleteVessel = trpc.deleteVessel.useMutation({
		onSuccess: () => {
			// invalidate get paginated vessels
			utils.getPaginatedVessels.invalidate()
		},
		onSettled: () => {
			setDeleting(false)
		},
	})

	const handleDelete = () => {
		setDeleting(true)
		deleteVessel.mutate(vesselId)
	}
	return (
		<>
			<svg
				onClick={() => setOpen(true)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="absolute right-0 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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
						Delete confirmation
					</Typography>
					<h2 className="py-3">Are you sure you want to delete this vessel?</h2>

					<div className="grid grid-cols-2 gap-3 py-3">
						<Button onClick={handleDelete} className="bg-sky-950 opacity-75">
							{deleting ? (
								<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Confirm'
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

const Vessel = ({ vessel }: { vessel: TVessel }) => {
	return (
		<div
			key={vessel.id}
			className="block group rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<div className="relative">
				<CreateUpdate action="update" vessel={vessel} />
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="absolute right-0 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg> */}
				<ConfirmDelete vesselId={vessel.id} />
				<h2 className="font-semibold text-sm text-neutral-800">
					{vessel.name}
				</h2>
				<div className="flex">
					<h4 className="font-normal text-sm text-neutral-800 pr-2 pt-1">
						Cargo capacity:
					</h4>
					<h4 className="font-normal text-sm text-neutral-800 pt-1">
						{vessel.totalCargoLoad}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default Vessel
