'use client'

import React from 'react'
import Projects from '@/app/_components/options/Projects'
import { projects } from '../../faker/data/projects'
import { Button } from '@/components/ui/button'
import CreateUpdate from '@/app/_components/modals/my-projects/CreateUpdate'

const MyProjects = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-32 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					My Projects
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<Projects projects={projects} option="projectName" />
					<Projects projects={projects} option="projectDate" />
				</div>
				<div className="grid grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-none gap-4 px-4">
					<Button className="py-4 bg-midnight opacity-95">Search</Button>
					<CreateUpdate action="create" />
				</div>
			</div>
		</div>
	)
}

export default MyProjects
