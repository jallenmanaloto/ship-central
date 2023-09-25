'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { trpc } from '@/app/_trpc/client'
import { ReloadIcon } from '@radix-ui/react-icons'

type TripsProps = {
	id: string
	cargoLoad: number
	projectId: string
	lctId: string
	createdAt: string | null
	updatedAt: string | null
	tripToVessel: string
}

const UpdateTrip = ({
	trip,
	tripNum,
	newCargo,
}: {
	trip: TripsProps
	tripNum: number
	newCargo: Dispatch<SetStateAction<boolean>>
}) => {
	const [open, setOpen] = useState<boolean>(false)
	const [updating, setUpdating] = useState<boolean>(false)
	const [cargo, setCargo] = useState(trip.cargoLoad as unknown as string)
	const utils = trpc.useContext()
	const updateTrip = trpc.updateLctTrip.useMutation({
		onSuccess: () => {
			// invalidate get paginated lct trip
			utils.getPaginatedLctTrips.invalidate()
			utils.getPaginatedLcts.invalidate()
		},
		onSettled: () => {
			// remove loading on button
			setUpdating(false)
			setOpen(false)
			newCargo(false)
		},
	})

	const handleUpdate = () => {
		setUpdating(true)
		updateTrip.mutate({
			tripId: trip.id,
			cargoLoad: parseInt(cargo),
		})
	}

	return (
		<div className="group top-0 right-4">
			<svg
				onClick={() => setOpen(true)}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="mt-2 ml-2 w-5 h-5 stroke-slate-600 cursor-pointer">
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
					<div className="mt-8 w-full py-3">
						<div className="flex py-3">
							<div className="flex items-center">
								<h2 className="text-bottom w-24">Trip #{tripNum}</h2>
							</div>
							<div className="w-full">
								<Input
									onChange={(e) => setCargo(e.target.value)}
									value={cargo}
								/>
							</div>
							<div className=" w-14"></div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button onClick={handleUpdate} className="bg-sky-950 opacity-75">
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
		</div>
	)
}

const UpdateTripRecord = ({
	trips,
	lctName,
}: {
	trips: TripsProps[]
	lctName: string | null
}) => {
	const [open, setOpen] = useState<boolean>(false)
	const [cargo, setCargo] = useState(0)
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
						Update trips for {lctName}
					</Typography>
					<div className="mt-8 w-full py-3">
						{trips.map((trip, idx) => {
							const tripNumber = idx + 1
							return (
								<div key={idx} className="flex py-3">
									<div className="flex items-center">
										<h2 className="text-bottom w-24">Trip #{tripNumber}</h2>
									</div>
									<div className="w-full">
										<Input defaultValue={trip.cargoLoad} disabled />
									</div>
									<div className=" w-14">
										<UpdateTrip
											trip={trip}
											tripNum={tripNumber}
											newCargo={setOpen}
										/>
									</div>
								</div>
							)
						})}
					</div>
				</Sheet>
			</Modal>
		</div>
	)
}

export default UpdateTripRecord
