'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import CreateUpdate from '@/app/_components/modals/vessels/CreateUpdate'
import Vessel from '@/app/_components/cards/Vessel'
import { Vessel as VesselModel } from '@prisma/client'
import { trpc } from '../../_trpc/client'
import { TVessel } from '@/utils/types'
import { useVesselNameStore, useVesselListStore } from '@/utils/store'
import Loading from '@/app/_components/loading/Loading'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const VesselOptions = () => {
	const { data: vesselNames } = trpc.getVesselNames.useQuery()
	const { setVesselName } = useVesselNameStore()

	return (
		<Select onValueChange={(field) => setVesselName(field)}>
			<SelectTrigger className="w-full bg-white outline-none">
				<SelectValue placeholder="Select a vessel" />
			</SelectTrigger>
			<SelectContent className="min-w-full">
				{vesselNames?.map((name, idx) => {
					return (
						<SelectItem key={idx} value={name}>
							{name}
						</SelectItem>
					)
				})}
			</SelectContent>
		</Select>
	)
}

const Vessels: React.FunctionComponent = () => {
	const { vesselName } = useVesselNameStore()
	const {
		data: vessels,
		isLoading,
		refetch,
	} = trpc.getVessels.useQuery({
		vesselName: vesselName,
	})

	useEffect(() => {
		refetch()
	}, [vesselName])

	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-56 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Vessels
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<VesselOptions />
					<div className="grid grid-cols-2 gap-4">
						<Button className="py-4 bg-midnight opacity-95">Search</Button>
						<CreateUpdate action="create" />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 py-3 px-4">
					{isLoading ? (
						<Loading />
					) : (
						vessels?.map((vessel: TVessel, idx) => {
							return (
								<div key={idx} className="py-2">
									<Vessel key={idx} vessel={vessel} />
								</div>
							)
						})
					)}
				</div>
			</div>
		</div>
	)
}

export default Vessels
