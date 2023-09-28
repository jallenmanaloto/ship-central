import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Textarea from '@mui/joy/Textarea'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import { trpc } from '@/app/_trpc/client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useDailyLoadingStore } from '@/utils/store'

type DatePickerProps =
	| {
			kind: 'update'
			value: Date
			type: string
			action: Dispatch<SetStateAction<string>>
	  }
	| {
			kind: 'create'
			value?: never
			type: string
			action: Dispatch<SetStateAction<string>>
	  }

const DatePicker = ({ kind, type, action, value }: DatePickerProps) => {
	const date = dayjs(value) as unknown as string
	const [dateValue, setDateValue] = useState<string>(date)

	// if (kind === 'update') {
	// 	action(dayjs(dateValue).format('YYYY-MM-DDTHH:mm:ssZ'))
	// }

	const handleChange = (val: string | null) => {
		if (kind === 'update') {
			setDateValue(val as string)
			const day = dayjs(val).format('YYYY-MM-DDTHH:mm:ssZ')
			action(day)
		} else {
			const day = dayjs(val).format('YYYY-MM-DDTHH:mm:ssZ')
			action(day)
		}
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker
				value={kind === 'update' ? dateValue : null}
				onChange={(val: string | null) => handleChange(val)}
			/>
		</LocalizationProvider>
	)
}

const CreateRecord = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [activityFrom, setActivityFrom] = useState<string>('')
	const [activityTo, setActivityTo] = useState<string>('')
	const [activity, setActivity] = useState<string>('')
	const [creating, setCreating] = useState<boolean>(false)
	const [excludeComputation, setExcludeComputation] = useState<boolean>(false)

	const { dailyLoadingProjectId } = useDailyLoadingStore()
	const utils = trpc.useContext()

	const createDailyLoading = trpc.createDailyLoading.useMutation({
		onSuccess: () => {
			utils.getProjects.invalidate()
		},
		onSettled: () => {
			setActivityFrom('')
			setActivityTo('')
			setActivity('')
			setCreating(false)
			setOpen(false)
		},
	})

	const handleExclude = () => {
		setExcludeComputation(!excludeComputation)
	}

	const handleCreate = () => {
		setCreating(true)
		createDailyLoading.mutate({
			projectId: dailyLoadingProjectId as string,
			activity: activity,
			activityFrom: activityFrom,
			activityTo: activityTo,
			exclude: excludeComputation,
		})
	}
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
						<div className="flex justify-between">
							<h2 className="text-bottom">Activity start:</h2>
							<DatePicker kind="create" type="start" action={setActivityFrom} />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Activity end:</h2>
							<DatePicker kind="create" type="end" action={setActivityTo} />
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<h2 className="pb-2">Activity:</h2>
						<Textarea
							value={activity}
							onChange={(e) => setActivity(e.target.value)}
							minRows={2}
							placeholder="Type activity.."
						/>
					</div>
					<div
						onClick={handleExclude}
						className="flex items-center mt-1 w-full pt-1 mb-5 cursor-pointer">
						<input
							onChange={handleExclude}
							checked={excludeComputation}
							type="checkbox"
						/>
						<h5 className="pl-1 text-xs">Exclude day on computation</h5>
					</div>
					<div className="grid grid-cols-2 gap-3 py-3">
						<Button onClick={handleCreate} className="bg-sky-950 opacity-75">
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

interface RecordProp {
	id: string
	activity: string | null
	activityFrom: Date
	activityTo: Date
	hourMins: string
	totalHours: number
	days: number
	createdAt: Date
	updatedAt: Date | null
	vesselId: string
	projectId: string
	exclude: boolean
}

const UpdateRecord = ({ dailyLoading }: { dailyLoading: RecordProp }) => {
	const [open, setOpen] = useState<boolean>(false)
	const [updating, setUpdating] = useState<boolean>(false)
	const [activityFrom, setActivityFrom] = useState<string>('')
	const [activityTo, setActivityTo] = useState<string>('')
	const [activity, setActivity] = useState<string>(dailyLoading.activity ?? '')
	const [excludeComputation, setExcludeComputation] = useState<boolean>(false)

	const utils = trpc.useContext()

	const updateReport = trpc.updateDailyLoading.useMutation({
		onSuccess: () => {
			// invalidate paginated daily loading
			utils.getPaginatedDailyLoading.invalidate()
		},
		onSettled: () => {
			setOpen(false)
			setUpdating(false)
			setActivityFrom('')
			setActivityTo('')
			setActivity('')
		},
	})

	const handleExclude = () => {
		setExcludeComputation(!excludeComputation)
	}

	const handleCloseModal = () => {
		setActivityFrom('')
		setActivityTo('')
		setActivity(dailyLoading.activity ?? '')
		setOpen(false)
		setExcludeComputation(dailyLoading.exclude)
	}

	const handleUpdate = () => {
		setUpdating(true)
		updateReport.mutate({
			activityFrom:
				activityFrom === ''
					? dayjs(dailyLoading.activityFrom).format('YYYY-MM-DDTHH:mm:ssZ')
					: activityFrom,
			activityTo:
				activityTo === ''
					? dayjs(dailyLoading.activityTo).format('YYYY-MM-DDTHH:mm:ssZ')
					: activityTo,
			activity: activity === '' ? (dailyLoading.activity as string) : activity,
			reportId: dailyLoading.id,
			exclude: excludeComputation,
		})
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
							<DatePicker
								kind="update"
								value={dailyLoading.activityFrom}
								type="start"
								action={setActivityFrom}
							/>
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<div className="flex justify-between">
							<h2 className="text-bottom">Activity end:</h2>
							<DatePicker
								kind="update"
								value={dailyLoading.activityTo}
								type="end"
								action={setActivityTo}
							/>
						</div>
					</div>
					<div className="mt-1 w-full py-3">
						<h2 className="pb-2">Activity:</h2>
						<Textarea
							onChange={(e) => setActivity(e.target.value)}
							value={activity}
							minRows={2}
							placeholder="Type activity.."
						/>
					</div>
					<div
						onClick={handleExclude}
						className="flex items-center mt-1 w-full pt-1 mb-5 cursor-pointer">
						<input
							onChange={handleExclude}
							checked={excludeComputation}
							type="checkbox"
						/>
						<h5 className="pl-1 text-xs">Exclude day on computation</h5>
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
							onClick={handleCloseModal}
							className="bg-red-950 opacity-75">
							Cancel
						</Button>
					</div>
				</Sheet>
			</Modal>
		</>
	)
}

type DailyLoadingProps =
	| {
			action: 'create'
			dailyLoading?: never
	  }
	| { action: 'update'; dailyLoading: RecordProp }

const CreateUpdate = ({ action, dailyLoading }: DailyLoadingProps) => {
	return (
		<>
			{action === 'create' ? (
				<CreateRecord />
			) : (
				<UpdateRecord dailyLoading={dailyLoading} />
			)}
		</>
	)
}

export default CreateUpdate
