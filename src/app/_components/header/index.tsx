'use client'

import Avatar from './Avatar'
import { useDrawerStore } from '@/utils/store'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSession, signOut } from 'next-auth/react'

const Header = () => {
	const { data: session } = useSession()
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
						<DropdownMenu>
							<h4 className="pr-2">{session?.user?.name}</h4>
							<DropdownMenuTrigger>
								<Avatar imageUrl={session?.user?.image as string} />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={() =>
										signOut({
											redirect: true,
											callbackUrl: 'http://localhost:3000/',
										})
									}>
									Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
