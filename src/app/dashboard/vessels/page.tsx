'use client'

import React, { useEffect, useState } from 'react'
import CreateUpdate from '@/app/_components/modals/vessels/CreateUpdate'
import Vessel from '@/app/_components/cards/Vessel'
import { trpc } from '../../_trpc/client'
import { TVessel } from '@/utils/types'
import { useVesselStore } from '@/utils/store'
import Loading from '@/app/_components/loading/Loading'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import VesselsPagination from '@/app/_components/pagination/VesselsPagination'

const VesselOptions = () => {
	const { data: vesselNames } = trpc.getVesselNames.useQuery()
	const { setVesselname, setVesselPage } = useVesselStore()
	const handleChange = (
		event: React.SyntheticEvent | null,
		newValue: string | null
	) => {
		setVesselname(newValue)
		setVesselPage(1)
	}

	return (
		<Select onChange={handleChange} placeholder="Choose a vessel">
			{vesselNames?.map((name, idx) => {
				return (
					<Option key={idx} value={name}>
						{name}
					</Option>
				)
			})}
		</Select>
	)
}

const Vessels: React.FunctionComponent = () => {
	const { vesselName, page, limit } = useVesselStore()

	const { data: vessels, isLoading } = trpc.getPaginatedVessels.useQuery({
		vesselName: vesselName,
		page: page,
		limit: limit,
	})
	let totalPage = vessels?.totalPage ?? 1

	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-56 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Vessels
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-none gap-4 px-4 pb-4">
					<div className="col-span-3 md:col-span-2">
						<VesselOptions />
					</div>
					<div className="col-span-3 md:col-span-1 w-full">
						<CreateUpdate action="create" vessel={null} />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 py-3 px-4">
					{isLoading ? (
						<Loading />
					) : (
						vessels?.vessels?.map((vessel: TVessel, idx) => {
							return (
								<div key={idx} className="py-2">
									<Vessel key={idx} vessel={vessel} />
								</div>
							)
						})
					)}
				</div>
				{isLoading ? '' : <VesselsPagination totalPage={totalPage} />}
			</div>
		</div>
	)
}

export default Vessels
