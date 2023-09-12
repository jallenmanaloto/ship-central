import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CreateUpdate from '../modals/lct/CreateUpdate'
import CreateUpdateTrip from '../modals/lct/CreateUpdateTrip'

const LctSearch = ({ type }: { type: string }) => {
	return (
		<div className="grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-none pt-2 pb-8">
			<Input
				className="bg-slate-50 outline-none"
				id="name"
				placeholder="Search LCT here"
			/>
			<div className="grid grid-cols-2 gap-4">
				<Button className="bg-midnight">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 pr-1">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					Search
				</Button>
				{type === 'lct' ? (
					<CreateUpdate action="create" lct={null} />
				) : (
					<CreateUpdateTrip action="create" />
				)}
			</div>
		</div>
	)
}

export default LctSearch
