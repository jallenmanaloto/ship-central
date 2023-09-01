'use client'

import { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import Avatar from './Avatar'
import { useDrawerStore } from '@/utils/store'

const Header = () => {
	const { toggleDrawer } = useDrawerStore()
	return (
		<div className="absolute h-[60px] w-full max-w-full bg-white shadow-2xl z-10">
			<div className="nav-bar h-full w-full px-6 py-2.5">
				<div className="h-full flex justify-between items-center">
					<div className="sm:block lg:opacity-0 cursor-none">
						<GrMenu onClick={toggleDrawer} size={18} />
					</div>
					<div className="flex justify-center items-center">
						<h4 className="pr-2">Name</h4>
						<Avatar imageUrl="https://tecdn.b-cdn.net/img/new/avatars/2.webp" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
