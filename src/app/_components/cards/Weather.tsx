'use client'

import { BsWind } from 'react-icons/bs'
import { GiBigWave } from 'react-icons/gi'
import { IoIosWater } from 'react-icons/io'
import { BsCloudRain } from 'react-icons/bs'
import { LiaTemperatureLowSolid } from 'react-icons/lia'

const Details = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 py-4">
			<div className="flex-col justify-center">
				<div className="flex w-auto">
					<h2 className="text-xl font-medium text-neutral-500 px-2">Wind</h2>
					<BsWind size={28} color="#075985" />
				</div>
				<h2 className="text-base font-semibold text-neutral-700 px-2">
					90km/h
				</h2>
			</div>
			<div className="flex-col justify-center">
				<div className="flex w-auto">
					<h2 className="text-xl font-medium text-neutral-500 px-2">Swell</h2>
					<GiBigWave size={28} color="#075985" />
				</div>
				<h2 className="text-base font-semibold text-neutral-700 px-2">3m</h2>
			</div>
			<div className="flex-col justify-center">
				<div className="flex w-auto">
					<h2 className="text-xl font-medium text-neutral-500 px-2">Rain</h2>
					<IoIosWater size={28} color="#075985" />
				</div>
				<h2 className="text-lg font-semibold text-neutral-700 px-2">17%</h2>
			</div>
			<div className="flex-col justify-center">
				<div className="flex w-auto">
					<h2 className="text-xl font-medium text-neutral-500 px-2">Amt.</h2>
					<BsCloudRain size={28} color="#075985" />
				</div>
				<h2 className="text-lg font-semibold text-neutral-700 px-2">1.5mm</h2>
			</div>
			<div className="flex-col justify-center">
				<div className="flex w-auto">
					<h2 className="text-xl font-medium text-neutral-500 px-2">Temp.</h2>
					<LiaTemperatureLowSolid size={28} color="#075985" />
				</div>
				<h2 className="text-lg font-semibold text-neutral-700 px-2">30°</h2>
			</div>
		</div>
	)
}

const Weather = () => {
	const date = new Date()
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}`

	return (
		<div className="block h-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
			<div className="flex justify-between pb-4">
				<h1 className="text-xl font-semibold leading-tight text-neutral-600">
					Dinagat Islands
				</h1>
				<div className="flex items-center">
					<h2 className="w-full text-base md:text-lg font-base leading-tight text-neutral-600 pl-4">
						{formattedDate}
					</h2>
				</div>
			</div>
			<div className="flex">
				<div className="flex items-center">
					<h2 className="pt-5 leading-tight text-lg font-medium text-neutral-600 px-2">
						Partly Cloudy
					</h2>
				</div>
				<img
					className="h-14 w-14"
					src="http://openweathermap.org/img/wn/02n@2x.png"
					alt=""
				/>
			</div>
			<Details />
		</div>
	)
}

export default Weather
