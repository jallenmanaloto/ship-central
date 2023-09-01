import React from 'react'

const Progress = ({
	name,
	percentage,
}: {
	name: string
	percentage: string
}) => {
	return (
		<div className="flex justify-between items-center py-3">
			<h5 className="text-sm min-w-[100px] max-w-[100px] pr-3">{name}</h5>
			<div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600">
				<div
					className="h-2 bg-sky-800"
					style={{ width: `${percentage}` }}></div>
			</div>
			<h5 className="text-xs pl-5">{percentage}</h5>
		</div>
	)
}

export default Progress
