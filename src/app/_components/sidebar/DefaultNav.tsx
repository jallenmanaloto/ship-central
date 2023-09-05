'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiHome } from 'react-icons/bi'
import { GoStack } from 'react-icons/go'
import { GoUpload } from 'react-icons/go'
import { PiBoat } from 'react-icons/pi'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiCoinsFill } from 'react-icons/ri'

const DefaultNav = () => {
	const pathname = usePathname()
	return (
		<div className="hidden md:block fixed top-0 h-screen w-[240px] bg-midnight">
			<div>
				<div className="h-[70px] flex items-center">
					<h1 className="h-full text-white font-medium text-2xl px-6 py-4 flex items-center">
						Ship Central
					</h1>
				</div>
				<Link href="/dashboard">
					<div className="flex items-center py-2 px-6 group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className={`w-5 h-5 ${
								pathname === '/dashboard'
									? 'stroke-dashboard'
									: 'stroke-categoryInactive'
							} group-hover:stroke-dashboard`}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<h2
							className={`${
								pathname === '/dashboard'
									? 'text-dashboard'
									: 'text-categoryInactive'
							} ml-1 font-medium group-hover:text-dashboard`}>
							Dashboard
						</h2>
					</div>
				</Link>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						REPORTS
					</h2>
				</div>
				<Link href="/dashboard/daily-loading">
					<div className="flex items-center py-3 px-6 cursor-pointer group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-5 h-5 ${
								pathname === '/dashboard/daily-loading'
									? 'stroke-dashboard'
									: 'stroke-categoryInactive'
							} group-hover:stroke-dashboard`}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
							/>
						</svg>
						<h2
							className={`${
								pathname === '/dashboard/daily-loading'
									? 'text-dashboard'
									: 'text-categoryInactive'
							} w-full text-md ml-2 font-medium group-hover:text-white`}>
							Daily Loading
						</h2>
					</div>
				</Link>
				<div className="flex items-center py-3 px-6 cursor-pointer ">
					<PiBoat style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive w-full text-md ml-2 font-medium hover:text-white">
						LCT Loading
					</h2>
				</div>
				<div className="flex items-center py-3 px-6 cursor-pointer ">
					<SiSimpleanalytics style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive w-full text-md ml-2 font-medium hover:text-white">
						Projects
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						REQUESTS
					</h2>
				</div>
				<div className="flex items-center py-3 px-6 cursor-pointer ">
					<RiCoinsFill style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive w-full text-md ml-2 font-medium hover:text-white">
						Budget
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						FILE & STORAGE
					</h2>
				</div>
				<div className="flex items-center py-3 px-6 cursor-pointer ">
					<GoUpload style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive w-full text-md ml-2 font-medium hover:text-white">
						Upload file
					</h2>
				</div>
			</div>
		</div>
	)
}

export default DefaultNav
