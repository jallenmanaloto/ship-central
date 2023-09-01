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
			<h3 className="text-sm min-w-[100px] max-w-[100px] pr-3 text-neutral-600">
				{name}
			</h3>
			<div className="h-2 w-full bg-neutral-200">
				<div
					className="h-2 bg-sky-800"
					style={{ width: `${percentage}` }}></div>
			</div>
			<h3 className="text-base pl-5 text-neutral-600">{percentage}</h3>
		</div>
	)
}

export default Progress
