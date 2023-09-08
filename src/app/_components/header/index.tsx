'use client'

import Avatar from './Avatar'
import { useDrawerStore } from '@/utils/store'

const Header = () => {
	const { toggleDrawer } = useDrawerStore()
	return (
		<div className="h-[60px] w-screen bg-white shadow-2xl">
			<div className="nav-bar h-full w-full px-6 py-2.5">
				<div className="h-full flex justify-between items-center">
					<div className="sm:block lg:opacity-0 cursor-none">
						<svg
							onClick={toggleDrawer}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
					<div className="flex justify-center items-center">
						<h4 className="pr-2">John</h4>
						<Avatar imageUrl="https://tecdn.b-cdn.net/img/new/avatars/2.webp" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
