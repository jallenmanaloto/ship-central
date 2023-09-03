import React from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { GiSunset } from 'react-icons/gi'

const SunStat = () => {
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<BsFillCloudSunFill />
			<GiSunset />
		</div>
	)
}

export default SunStat
