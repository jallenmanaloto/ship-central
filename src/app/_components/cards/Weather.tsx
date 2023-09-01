import React from 'react'
import Bubbles from '../bubbles'
import { BsWind } from 'react-icons/bs'
import { GiBigWave } from 'react-icons/gi'
import { IoIosWater } from 'react-icons/io'
import { BsCloudRain } from 'react-icons/bs'
import { LiaTemperatureLowSolid } from 'react-icons/lia'

const Details = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 py-4">
			<div className="flex w-auto items-center px-3">
				<div className="flex justify-center items-center h-16 w-16 border-solid border-2 rounded-lg border-sky-800">
					<BsWind size={32} color="#075985" />
				</div>
				<h2 className="text-lg font-medium text-neutral-500 px-2">90km/h</h2>
			</div>
			<div className="flex w-auto items-center px-3">
				<div className="flex justify-center items-center h-16 w-16 border-solid border-2 rounded-lg border-sky-800">
					<GiBigWave size={32} color="#075985" />
				</div>
				<h2 className="text-lg font-medium text-neutral-500 px-2">5m</h2>
			</div>
			<div className="flex w-auto items-center px-3">
				<div className="flex justify-center items-center h-16 w-16 border-solid border-2 rounded-lg border-sky-800">
					<IoIosWater size={32} color="#075985" />
				</div>
				<h2 className="text-lg font-medium text-neutral-500 px-2">10%</h2>
			</div>
			<div className="flex w-auto items-center px-3">
				<div className="flex justify-center items-center h-16 w-16 border-solid border-2 rounded-lg border-sky-800">
					<BsCloudRain size={32} color="#075985" />
				</div>
				<h2 className="text-lg font-medium text-neutral-500 px-2">5mm</h2>
			</div>
			<div className="flex w-auto items-center px-3">
				<div className="flex justify-center items-center h-16 w-16 border-solid border-2 rounded-lg border-sky-800">
					<LiaTemperatureLowSolid size={32} color="#075985" />
				</div>
				<h2 className="text-lg font-medium text-neutral-500 px-2">32°</h2>
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
			<div className="flex justify-between">
				<h1 className="text-3xl font-semibold leading-tight text-neutral-600">
					Dinagat Islands
				</h1>
				<div className="flex items-center">
					<h2 className="w-full text-base md:text-lg font-base leading-tight text-neutral-600">
						{formattedDate}
					</h2>
				</div>
			</div>
			<div className="flex">
				<div className="flex items-center">
					<h2 className="leading-tight text-lg font-medium text-neutral-600">
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
