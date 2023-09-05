import React from 'react'
import Goals from '../cards/Goals'
import Forecast from '../forecast'
import Analysis from '../../_components/analysis'

const Home = () => {
	return (
		<div className="h-full pb-10 overflow-y-auto">
			<div className="w-full h-[268px] bg-sky-800" />
			<div className="w-full t-0 grid grid-cols-1 -mt-20 md:grid-cols-2 gap-7 px-10">
				<Goals />
				<Forecast />
			</div>
			<Analysis />
		</div>
	)
}

export default Home
