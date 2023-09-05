import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import CreateUpdate from '../modals/daily-loading/CreateUpdate'

const Timeline = () => {
	return (
		<ol className="border-l border-neutral-900 dark:border-neutral-500">
			<li>
				<div className="flex-start flex items-center pt-3">
					<div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-900 dark:bg-neutral-500"></div>
					<p className="text-sm text-neutral-500 dark:text-neutral-300">
						September 1, 2023
					</p>
				</div>
				<div className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
					<div>
						<h4 className="mb-1.5 text-base font-medium">1:35PM - 3:20PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Vessel arrived port of Surigao pilot station
						</p>
					</div>
					<div className="invisible group-hover:visible flex items-center pr-3 mt-4">
						<CreateUpdate action="update" />
						<MdDelete size={20} color="#454f5b" style={{ marginLeft: '4px' }} />
					</div>
				</div>
				<div className="group flex justify-between my-2 ml-4 md:w-3/4 hover:cursor-pointer">
					<div>
						<h4 className="mb-1.5 text-base font-medium">3:35PM - 3:45PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Resume & cont. loading operation H4&H5
						</p>
					</div>
					<div className="invisible group-hover:visible flex items-center pr-3 mt-4">
						<AiFillEdit
							size={20}
							color="#454f5b"
							style={{ marginRight: '4px' }}
						/>
						<MdDelete size={20} color="#454f5b" style={{ marginLeft: '4px' }} />
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
				<div className="flex justify-between my-2 ml-4 md:w-3/4">
					<div>
						<h4 className="mb-1.5 text-base font-medium">1:35PM - 3:20PM</h4>
						<p className="mb-3 text-neutral-500 dark:text-neutral-300">
							Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
							natus! Eum corporis illum nihil officiis tempore. Excepturi illo
							natus libero sit doloremque, laborum molestias rerum pariatur quam
							ipsam necessitatibus incidunt, explicabo.
						</p>
					</div>
					<div className="flex items-center pr-3 mt-4">
						<AiFillEdit
							size={20}
							color="#454f5b"
							style={{ marginRight: '4px' }}
						/>
						<MdDelete size={20} color="#454f5b" style={{ marginLeft: '4px' }} />
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
