import React from 'react'
import CreateUpdate from '../modals/daily-loading/CreateUpdate'

const Timeline = () => {
	return (
		<ol className="border-l border-neutral-900 dark:border-neutral-500 pb-12">
			<li>
				<div className="flex-start flex items-center pt-3">
					<div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-900 dark:bg-neutral-500"></div>
					<p className="text-sm text-neutral-500 dark:text-neutral-300">
						September 1, 2023
					</p>
				</div>
				<div className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
					<div className="max-w-[230px]">
						<h4 className="mb-1.5 text-base font-medium">1:35PM - 3:20PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Vessel arrived port of Surigao pilot station
						</p>
					</div>
					<div className="invisible group-hover:visible flex justify-between w-14 items-center pr-1 mt-4">
						<CreateUpdate action="update" />
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
				<div className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
					<div className="max-w-[230px]">
						<h4 className="mb-1.5 text-base font-medium">1:35PM - 3:20PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Vessel arrived port of Surigao pilot station
						</p>
					</div>
					<div className="invisible group-hover:visible flex justify-between w-14 items-center pr-1 mt-4">
						<CreateUpdate action="update" />
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
			</li>
			<li>
				<div className="flex-start flex items-center pt-2">
					<div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-900 dark:bg-neutral-500"></div>
					<p className="text-sm text-neutral-500 dark:text-neutral-300">
						August 31, 2023
					</p>
				</div>
				<div className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
					<div className="max-w-[230px]">
						<h4 className="mb-1.5 text-base font-medium">1:35PM - 3:20PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus quod cum iste nulla molestiae a, omnis quos
							accusamus! Tempora, praesentium?
						</p>
					</div>
					<div className="invisible group-hover:visible flex justify-between w-14 items-center pr-1 mt-4">
						<CreateUpdate action="update" />
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
			</li>
			<li>
				<div className="flex-start flex items-center pt-2">
					<div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-900 dark:bg-neutral-500"></div>
					<p className="text-sm text-neutral-500 dark:text-neutral-300">
						25.11.2021
					</p>
				</div>
				<div className="ml-4 mt-2 pb-5">
					<h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
					<p className="mb-3 text-neutral-500 dark:text-neutral-300">
						Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
						natus! Eum corporis illum nihil officiis tempore. Excepturi illo
						natus libero sit doloremque, laborum molestias rerum pariatur quam
						ipsam necessitatibus incidunt, explicabo.
					</p>
				</div>
			</li>
		</ol>
	)
}

export default Timeline
