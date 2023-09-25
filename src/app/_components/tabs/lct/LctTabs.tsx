'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LctSearch from '../../search/LctSearch'
import { trpc } from '@/app/_trpc/client'
import LctCard from '../../cards/lct/LctCard'
import LctLoading from '../../loading/LctLoading'
import { useLctStore } from '@/utils/store'
import LctPagination from '../../pagination/LctPagination'
import LctTripSearch from '../../search/LctTripSearch'
import LctTripsCard from '../../cards/lct/LctTripsCard'
import Loading from '../../loading/Loading'
import LctTripPagination from '../../pagination/LctTripPagination'

const LctTabs = () => {
	const { lctName, lctTripName, page, limit, tripPage, tripLimit } =
		useLctStore()
	const { data: lcts, isLoading } = trpc.getPaginatedLcts.useQuery({
		lctName: lctName,
		page: page,
		limit: limit,
	})

	const { data: lctProj, isLoading: tripLoading } =
		trpc.getPaginatedLctTrips.useQuery({
			page: tripPage,
			limit: tripLimit,
			lctName: lctTripName,
		})

	const lctTrips = lctProj?.lctProj ?? []
	let totalPage = lcts?.totalPage ?? 1
	const lctCount = lcts?.totalCount ?? 0
	let tripTotalPage = lctProj?.totalPage ?? 1

	return (
		<div className="pt-5 w-full">
			<Tabs defaultValue="LCT" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger className="font-bold" value="LCT">
						LCTs
					</TabsTrigger>
					<TabsTrigger className="font-bold" value="Trips">
						Trips
					</TabsTrigger>
				</TabsList>
				<TabsContent value="LCT">
					{/* Content#1 here - LCT Collection */}
					<LctSearch type="lct" />
					{isLoading ? (
						<LctLoading />
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
							{lcts?.lcts?.map((lct, idx) => {
								return <LctCard key={idx} lct={lct} projects={lct.project} />
							})}
						</div>
					)}

					{isLoading ? (
						''
					) : lctCount === 0 ? (
						<div className="text-center">No data to show</div>
					) : (
						<LctPagination totalPage={totalPage} />
					)}
				</TabsContent>
				<TabsContent value="Trips">
					{/* Content#2 here - LCT TRIP */}
					<LctTripSearch />
					{tripLoading ? (
						<LctLoading />
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
							{lctTrips.map((trip, idx) => {
								return <LctTripsCard key={idx} lctProj={trip} />
							})}
						</div>
					)}

					{tripLoading ? (
						''
					) : lctTrips.length === 0 ? (
						<div className="text-center">No data to show</div>
					) : (
						<LctTripPagination totalPage={tripTotalPage} />
					)}
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default LctTabs
