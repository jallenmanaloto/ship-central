import React from 'react'
import { marineForecast } from '../../faker/data/marineForecast'
import dayJs from 'dayjs'

const TempSwell = () => {
	const { daily } = marineForecast
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full text-left text-sm font-light">
							<thead className="font-medium">
								<tr>
									{daily.time.map((day, idx) => {
										return (
											<th
												key={idx}
												scope="col"
												className="px-6 py-4 text-sm text-white">
												{dayJs(day).format('DD MMM')}
											</th>
										)
									})}
								</tr>
							</thead>
							<tbody>
								<tr>
									{daily.swell_wave_height_max.map((swell, idx) => {
										return (
											<td className="whitespace-nowrap px-6 py-1 text-xs font-medium text-white">
												{swell}m
											</td>
										)
									})}
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TempSwell
