import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { weatherForecast } from '@/app/faker/data/weatherForecast'

interface UVIndex {
	[key: number]: string
}

const uvIndex: UVIndex = {
	0: 'Low',
	1: 'Low',
	2: 'Low',
	3: 'Moderate',
	4: 'Moderate',
	5: 'Moderate',
	6: 'High',
	7: 'High',
	8: 'Very High',
	9: 'Very High',
	10: 'Very High',
	11: 'Extreme',
}

const Temp = () => {
	const { daily } = weatherForecast
	const uv: number = Math.round(daily.uv_index_max[0])
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<div className="flex ">
				<BsFillSunFill size={20} color="rgb(82 82 82)" />
				<div className="flex justify-center px-1">
					<h1 className="text-base font-semibold leading-3 text-neutral-600">
						UV Index
					</h1>
				</div>
			</div>
			<div className="justify-between pt-1">
				<div className="flex items-center">
					<h1 className="text-4xl font-bold leading-3 text-neutral-600 pt-2">
						{uv}
					</h1>
				</div>
				<h2 className="text-lg font-medium leading-3 text-neutral-600">
					{uvIndex[uv]}
				</h2>
			</div>
		</div>
	)
}

export default Temp
