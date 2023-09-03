'use client'

import { BsWind } from 'react-icons/bs'
import { IoIosWater } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import TempSwell from '../tables/TempSwell'
import dayJs from 'dayjs'
import weather from '../../../../public/weather.jpg'

const WeatherDetails = () => {
	return (
		<div className="pt-4">
			<div className="flex items-center justify-around">
				<div className="flex items-center">
					<BsWind size={14} color="white" />
					<h2 className="text-sm font-medium tracking-wider px-1 text-white">
						720hpa
					</h2>
				</div>
				<div className="flex items-center">
					<IoIosWater size={14} color="white" />
					<h2 className="text-sm font-medium tracking-wider px-1 text-white">
						32%
					</h2>
				</div>
				<div className="flex items-center">
					<BsWind size={14} color="white" />
					<h2 className="text-sm font-medium tracking-wider px-1 text-white">
						12km/h
					</h2>
				</div>
			</div>
		</div>
	)
}

const Weather = () => {
	const date = new Date()

	return (
		<div
			className="rounded-lg"
			style={{
				backgroundImage: `url(${weather.src})`,
			}}>
			<div className="block h-full rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] z-30">
				<div className="grid-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<div className="flex items-center justify-between pb-1">
							<div className="flex items-center">
								<MdLocationOn size={16} color="white" />
								<div className="flex justify-between">
									<h1 className="text-xl font-medium leading-tight text-white">
										Dinagat Islands
									</h1>
								</div>
							</div>
							<div className="flex items-center">
								<h2 className="leading-tight text-xs font-medium text-white">
									{dayJs(date).format('MMM DD')}
								</h2>
							</div>
						</div>
						<div className="pt-4">
							<h1 className="text-6xl text-center text-white font-semibold py-1">
								14°
							</h1>
							<h1 className="text-base text-center text-white py-1">Cloudy</h1>
						</div>
						<WeatherDetails />
					</div>
					<div className="rounded-lg bg-slate-100 bg-opacity-10 overflow-hidden">
						<h2 className="leading-5 font-semibold text-lg text-white px-6 py-3">
							Swell
						</h2>
						<TempSwell />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
