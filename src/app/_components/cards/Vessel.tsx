import React from 'react'
import CreateUpdate from '../modals/vessels/CreateUpdate'

type VesselProps = {
	name: string
	totalCargoLoad: number
}

const Vessel = ({ vessel }: { vessel: VesselProps }) => {
	return (
		<div className="block group rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<div className="relative">
				<CreateUpdate action="update" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="absolute right-0 w-5 h-5 stroke-slate-600 invisible group-hover:visible cursor-pointer">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>

				<h2 className="font-semibold text-sm text-neutral-800">
					{vessel.name}
				</h2>
				<div className="flex">
					<h4 className="font-normal text-sm text-neutral-800 pr-2 pt-1">
						Cargo capacity:
					</h4>
					<h4 className="font-normal text-sm text-neutral-800 pt-1">
						{vessel.totalCargoLoad}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default Vessel
