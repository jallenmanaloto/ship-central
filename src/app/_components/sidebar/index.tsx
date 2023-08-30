import React from 'react'
import { BiHome } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { GoStack } from 'react-icons/go'
import { GoUpload } from 'react-icons/go'
import { PiBoat } from 'react-icons/pi'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiCoinsFill } from 'react-icons/ri'

const Sidebar = () => {
	return (
		<div className="h-screen w-full max-w-[250px] bg-midnight absolute">
			<div>
				<div className="h-[70px] flex items-center">
					<h1 className="h-full text-white font-medium text-2xl px-6 py-4">
						Ship Central
					</h1>
					<IoMdClose size={20} color="#fff" style={{ marginLeft: '35px' }} />
				</div>
				<div className="flex items-center py-2 px-6">
					<BiHome size={18} color="#f4f6f8" />
					<h2 className="text-dashboard ml-1 font-medium">Dashboard</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						REPORTS
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<GoStack style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive text-md ml-2 font-medium">
						Daily Loading
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<PiBoat style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive text-md ml-2 font-medium">
						Vessel Loading
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<SiSimpleanalytics style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive text-md ml-2 font-medium">
						Analytics
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						REQUESTS
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<RiCoinsFill style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive text-md ml-2 font-medium">
						Budget
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<h2 className="text-sm text-category font-semibold tracking-category">
						FILE & STORAGE
					</h2>
				</div>
				<div className="flex items-center py-3 px-6">
					<GoUpload style={{ color: '#919eab' }} />
					<h2 className="text-categoryInactive text-md ml-2 font-medium">
						Upload file
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
