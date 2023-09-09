import Projects from '@/app/_components/options/Projects'
import React from 'react'
import { projects } from '@/app/faker/data/projects'
import { Button } from '@/components/ui/button'
import CreateUpdate from '@/app/_components/modals/vessels/CreateUpdate'
import Vessel from '@/app/_components/cards/Vessel'
import vessels from '@/app/faker/data/vessels'

const Vessels = () => {
	return (
		<div className="flex h-screen max-h-screen md:ml-[240px]">
			<div className="w-screen h-screen pb-56 px-6 bg-slate-200 overflow-y-scroll">
				<h1 className="text-xl text-neutral-800 font-bold py-5 px-4">
					Vessels
				</h1>
				<div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 px-4 pb-4">
					<Projects projects={projects} option="projectName" />
					<div className="grid grid-cols-2 gap-4">
						<Button className="py-4 bg-midnight opacity-95">Search</Button>
						<CreateUpdate action="create" />
					</div>
				</div>
				<div className="mt-12 py-3 px-4">
					{vessels.map((vessel, idx) => {
						return (
							<div key={idx} className="py-2">
								<Vessel vessel={vessel} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Vessels
