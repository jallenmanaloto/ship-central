import React, { useEffect } from 'react'
import CreateUpdate from '../modals/daily-loading/CreateUpdate'
import { trpc } from '@/app/_trpc/client'
import { useDailyLoadingStore } from '@/utils/store'
import dayjs from 'dayjs'
import { LoadingReport } from '@prisma/client'
import DailyLoadingPagination from '../pagination/DailyLoadingPagination'
import Loading from '../loading/Loading'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

const Timeline = () => {
	dayjs.extend(utc)
	dayjs.extend(timezone)
	dayjs.tz.setDefault('Asia/Manila')

	const { dailyLoadingProjectId, setDailyLoadingProjectId, page, limit } =
		useDailyLoadingStore()

	useEffect(() => {
		setDailyLoadingProjectId(null)
	}, [])
	const { data: dailyLoading, isLoading } =
		trpc.getPaginatedDailyLoading.useQuery(
			{
				projectId: dailyLoadingProjectId,
				page: page,
				limit: limit,
			},
			{ cacheTime: 0 }
		)
	const totalPage = dailyLoading?.totalPage ?? 0
	return (
		<>
			{dailyLoading?.totalCount === 0 ? (
				<h4 className="text-center">No data to show</h4>
			) : isLoading ? (
				<Loading />
			) : (
				<>
					<ol className="border-l border-neutral-900 dark:border-neutral-500 pb-12">
						{dailyLoading?.dailyLoading?.map((dates, idx) => {
							const records = Object.values(dates)[0] as LoadingReport[]
							records.sort((a, b) => {
								const aDate = new Date(a.activityFrom)
								const bDate = new Date(a.activityTo)

								return bDate.getTime() - aDate.getTime()
							})
							const date = dayjs(Object.keys(dates)[0])
								// .add(1, 'day')
								.format('YYYY-MM-DD')
							console.log(dates)
							return (
								<li key={idx}>
									<div className="flex-start flex items-center pt-3">
										<div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-900 dark:bg-neutral-500"></div>
										<p className="text-sm text-neutral-500 dark:text-neutral-300">
											{date}
										</p>
									</div>
									{records?.map((record: LoadingReport, idx: number) => {
										return (
											<div
												key={idx}
												className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
												<div className="max-w-[230px]">
													<div className="flex">
														<h4 className="mb-1.5 text-base font-medium">
															{`${dayjs(record.activityFrom).format(
																'h:mmA'
															)} - ${dayjs(record.activityTo).format('h:mmA')}`}
														</h4>
													</div>
													<p className="mb-3 text-neutral-500 dark:text-neutral-300">
														{record.activity}
													</p>
												</div>
												<div className="invisible group-hover:visible flex justify-between w-14 items-center pr-1 mt-4">
													<CreateUpdate action="update" dailyLoading={record} />
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-5 h-5 stroke-slate-600">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
														/>
													</svg>
												</div>
											</div>
										)
									})}
								</li>
							)
						})}
					</ol>
					<DailyLoadingPagination totalPage={totalPage} />
				</>
			)}
		</>
	)
}

export default Timeline
