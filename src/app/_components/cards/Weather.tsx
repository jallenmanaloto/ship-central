'use client'

import { BsWind } from 'react-icons/bs'
import { GiBigWave } from 'react-icons/gi'
import { IoIosWater } from 'react-icons/io'
import { BsCloudRain } from 'react-icons/bs'
import { LiaTemperatureLowSolid } from 'react-icons/lia'

const Details = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 py-4">
			<div className="w-full flex justify-center">
				<div className="bg-slate-500 h-28 w-28 rounded-md">
					<div className="flex-col justify-center">
						<div className="flex items-center w-auto py-2 px-3">
							<BsWind size={14} color="#D4D4D4" />
							<h2 className="text-sm font-medium tracking-wider px-2 text-neutral-300">
								WIND
							</h2>
						</div>
						<div className="flex-col justify-center items-center">
							<h2 className="text-xl font-semibold text-center text-neutral-50 px-2">
								90
							</h2>
							<h2 className="text-base font-normal text-center text-neutral-50 px-2">
								km/h
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="bg-slate-500 h-28 w-28 rounded-md">
					<div className="flex-col justify-center">
						<div className="flex items-center w-auto py-2 px-3">
							<GiBigWave size={14} color="#D4D4D4" />
							<h2 className="text-sm font-medium tracking-wider px-2 text-neutral-300">
								SWELL
							</h2>
						</div>
						<div className="flex-col justify-center items-center">
							<h2 className="text-xl font-semibold text-center text-neutral-50 px-2">
								3 m
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="bg-slate-500 h-28 w-28 rounded-md">
					<div className="flex-col justify-center">
						<div className="flex items-center w-auto py-2 px-3">
							<IoIosWater size={14} color="#D4D4D4" />
							<h2 className="text-sm font-medium tracking-wider px-2 text-neutral-300">
								RAIN
							</h2>
						</div>
						<div className="flex-col justify-center items-center">
							<h2 className="text-xl font-semibold tracking-tight text-center text-neutral-50 px-2">
								49 mm
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="bg-slate-500 h-28 w-28 rounded-md">
					<div className="flex-col justify-center">
						<div className="flex items-center w-auto py-2 px-3">
							<LiaTemperatureLowSolid size={14} color="#D4D4D4" />
							<h2 className="text-sm font-medium tracking-wider px-2 text-neutral-300">
								TEMP
							</h2>
						</div>
						<div className="flex-col justify-center items-center">
							<h2 className="text-xl font-semibold text-center text-neutral-50 px-2">
								30°
							</h2>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="w-full flex justify-center">
				<div className="flex-col justify-center">
					<div className="flex w-auto">
						<h2 className="text-xl font-medium text-neutral-500 px-2">Amt.</h2>
						<BsCloudRain size={28} color="#075985" />
					</div>
					<h2 className="text-lg font-semibold text-neutral-700 px-2">1.5mm</h2>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="flex-col justify-center">
					<div className="flex w-auto">
						<h2 className="text-xl font-medium text-neutral-500 px-2">Temp.</h2>
						<LiaTemperatureLowSolid size={28} color="#075985" />
					</div>
					<h2 className="text-lg font-semibold text-neutral-700 px-2">30°</h2>
				</div>
			</div> */}
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
		<div className="relative">
			<img
				className="absolute h-16 w-16 top-4 right-2"
				src="https://openweathermap.org/img/wn/03d@2x.png"
				alt=""
			/>
			<div className="block h-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
				<div className="flex justify-between pb-1">
					<h1 className="text-xl font-semibold leading-tight text-neutral-600">
						Dinagat Islands
					</h1>
				</div>
				<div className="flex">
					<div className="flex items-center">
						<h2 className="leading-tight text-xs font-medium text-neutral-600">
							{formattedDate} | Cloudy
						</h2>
					</div>
				</div>
				<Details />
			</div>
		</div>
	)
}

export default Weather
