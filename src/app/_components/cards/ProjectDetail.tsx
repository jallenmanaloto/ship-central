import { ProjDetail } from '@/utils/types'
import React from 'react'
import dayjs from 'dayjs'
import MoreDetails from '../accordion/my-projects/MoreDetails'
import { Switch } from '@/components/ui/switch'
import { IProject } from '@/utils/types'

const ProjectDetail = ({ project }: { project: IProject }) => {
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<div className="flex justify-between">
				<h2 className="text-base font-semibold text-neutral-800">
					{project.vesselName}
				</h2>
				<Switch />
			</div>
			<h4 className="text-sm text-neutral-800">
				{`(${dayjs(project.projectStartDate).format('MMM DD, YYYY')} - ${dayjs(
					project.projectEndDate
				).format('MMM DD, YYYY')})`}
			</h4>
			<MoreDetails />
		</div>
	)
}

export default ProjectDetail
