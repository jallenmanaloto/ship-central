import React from 'react'

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
					<h2 className="text-xl font-base leading-tight text-neutral-600">
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
		</div>
	)
}

export default Weather
