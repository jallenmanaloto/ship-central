'use client'

import React from 'react'
import Projects from '@/app/_components/options/Projects'
import { Button } from '@/components/ui/button'
import CreateUpdate from '@/app/_components/modals/my-projects/CreateUpdate'
import ProjectDetail from '@/app/_components/cards/ProjectDetail'
import { trpc } from '@/app/_trpc/client'
import { IProject } from '@/utils/types'
import { useProjectStore } from '@/utils/store'
import Loading from '@/app/_components/loading/Loading'
import ProjectPagination from '@/app/_components/pagination/ProjectPagination'

const MyProjects = () => {
	const { chosenVesselId, startDateSearch, endDateSearch, page, limit } =
		useProjectStore()
	const projectData = {
		vesselId: chosenVesselId,
		projectStartDate: startDateSearch,
		projectEndDate: endDateSearch,
		page: page,
		limit: limit,
	}

	const { data: projects, isLoading } =
		trpc.getPaginatedProjects.useQuery(projectData)
	let totalPage = projects?.totalPage ?? 1

	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-56 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					My Projects
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-none gap-4 px-4 pb-4">
					<Projects option="projectName" />
					<Projects option="projectDate" />
					<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 md:grid-rows-none gap-4">
						<div className="grid grid-cols-1 gap-4">
							<CreateUpdate action="create" />
						</div>
					</div>
				</div>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
					{isLoading ? (
						<Loading />
					) : (
						projects?.projects?.map((project: IProject, idx: number) => {
							return (
								<div key={idx} className="py-3 px-4">
									<ProjectDetail project={project} />
								</div>
							)
						})
					)}
				</div>
				{projects?.projects?.length === 0 ? (
					<h3 className="text-center">No data to show</h3>
				) : (
					''
				)}
				{isLoading ? '' : <ProjectPagination totalPage={totalPage} />}
			</div>
		</div>
	)
}

export default MyProjects
