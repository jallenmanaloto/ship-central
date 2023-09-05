'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiHome } from 'react-icons/bi'
import { FiArrowLeft } from 'react-icons/fi'
import { GoStack } from 'react-icons/go'
import { GoUpload } from 'react-icons/go'
import { PiBoat } from 'react-icons/pi'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiCoinsFill } from 'react-icons/ri'
import { useDrawerStore } from '@/utils/store'

const MobileNav = () => {
	const { display, toggleDrawer } = useDrawerStore()
	const pathname = usePathname()

	return (
		<div className="block lg:hidden">
			<nav
				id="sidenav-1"
				className="absolute left-0 top-0 bottom-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-midnight shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 transition-transform duration-300 ease-in-out"
				data-te-sidenav-init
				data-te-sidenav-hidden={display}
				data-te-sidenav-position="absolute">
				<div>
					<div className="h-[70px] flex items-center" data-te-sidenav-menu-ref>
						<h1 className="h-full text-white font-medium text-2xl px-6 py-4 flex items-center">
							Ship Central
						</h1>
						<FiArrowLeft
							onClick={toggleDrawer}
							size={20}
							color="#fff"
							style={{
								marginLeft: '20px',
								cursor: 'pointer',
							}}
						/>
					</div>
					<Link href="/dashboard">
						<div className="flex items-center py-2 px-6 group">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className={`w-5 h-5 ${
									pathname === '/dashboard'
										? 'stroke-dashboard'
										: 'stroke-categoryInactive'
								} group-hover:stroke-dashboard`}>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
							<h2
								className={`${
									pathname === '/dashboard'
										? 'text-dashboard'
										: 'text-categoryInactive'
								} ml-1 font-medium`}>
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
						<div className="flex items-center py-3 px-6 cursor-pointer ">
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
								} w-full text-md ml-2 font-medium hover:text-white`}>
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
			</nav>
		</div>
	)
}

export default MobileNav
