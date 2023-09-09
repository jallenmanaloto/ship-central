'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
						<svg
							onClick={toggleDrawer}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 stroke-white">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
					</div>
					<div className="flex items-center py-3 px-6">
						<h2 className="text-sm text-category font-semibold tracking-category">
							REPORTS
						</h2>
					</div>
					<Link href="/dashboard">
						<div
							onClick={toggleDrawer}
							className="flex items-center py-2 px-6 group">
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
								} ml-1 font-medium`}>
								Overview
							</h2>
						</div>
					</Link>
					<Link href="/dashboard/daily-loading">
						<div
							onClick={toggleDrawer}
							className="flex items-center py-3 px-6 cursor-pointer ">
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
					<div className="flex items-center py-3 px-6">
						<h2 className="text-sm text-category font-semibold tracking-category">
							SHIPS
						</h2>
					</div>
					<Link href="/dashboard/projects">
						<div
							onClick={toggleDrawer}
							className="flex items-center py-3 px-6 cursor-pointer ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`w-5 h-5 ${
									pathname === '/dashboard/projects'
										? 'stroke-dashboard'
										: 'stroke-categoryInactive'
								} group-hover:stroke-dashboard`}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
								/>
							</svg>
							<h2
								className={`${
									pathname === '/dashboard/projects'
										? 'text-dashboard'
										: 'text-categoryInactive'
								} w-full text-md ml-2 font-medium hover:text-white`}>
								My Projects
							</h2>
						</div>
					</Link>
					<Link href="/dashboard/vessels">
						<div
							onClick={toggleDrawer}
							className="flex items-center py-3 px-6 cursor-pointer ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`w-5 h-5 ${
									pathname === '/dashboard/vessels'
										? 'stroke-dashboard'
										: 'stroke-categoryInactive'
								} group-hover:stroke-dashboard`}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<h2
								className={`${
									pathname === '/dashboard/vessels'
										? 'text-dashboard'
										: 'text-categoryInactive'
								} w-full text-md ml-2 font-medium hover:text-white`}>
								Vessels
							</h2>
						</div>
					</Link>
					<div className="flex items-center py-3 px-6 cursor-pointer ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-5 h-5 ${
								pathname === '/dashboard/vessels'
									? 'stroke-dashboard'
									: 'stroke-categoryInactive'
							} group-hover:stroke-dashboard`}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
							/>
						</svg>
						<h2 className="text-categoryInactive w-full text-md ml-2 font-medium hover:text-white">
							LCTs
						</h2>
					</div>
					<div className="flex items-center py-3 px-6">
						<h2 className="text-sm text-category font-semibold tracking-category">
							FILE & STORAGE
						</h2>
					</div>
					<div className="flex items-center py-3 px-6 cursor-pointer ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 stroke-categoryInactive">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
							/>
						</svg>
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
