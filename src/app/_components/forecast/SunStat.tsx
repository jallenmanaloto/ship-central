import React from 'react'
import { weatherForecast } from '@/app/faker/data/weatherForecast'
import dayjs from 'dayjs'

const Head = () => {
	let status = 'sunrise'
	const { daily } = weatherForecast
	const now = dayjs()
	const hourNow = dayjs(now).format('H')
	const sunRise = dayjs(daily.sunrise[0]).format('h:mmA')
	const sunSet = dayjs(daily.sunset[0]).format('h:mmA')

	if (parseInt(hourNow) > 12) {
		const minutes = parseInt(dayjs(now).format('m'))
		if (minutes > 0) {
			status = 'sunset'
		}
	}

	return (
		<>
			<div className="flex">
				{status === 'sunrise' ? <h4>sunrise icon</h4> : <h4>sunset icon</h4>}
				<div className="flex justify-center px-1">
					<h1 className="text-base font-semibold leading-3 text-neutral-600">
						{status === 'sunrise' ? 'Sunrise' : 'Sunset'}
					</h1>
				</div>
			</div>
			<h1 className="text-xl font-semibold leading-3 text-neutral-600 pt-3">
				{status === 'sunrise' ? sunRise : sunSet}
			</h1>
		</>
	)
}
const SunStat = () => {
	return (
		<div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
			<Head />
		</div>
	)
}

export default SunStat
