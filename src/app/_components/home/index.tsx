import React from 'react'
import Goals from '../cards/Goals'
import Forecast from '../forecast'

const Home = () => {
	return (
		<div className="relative h-full overflow-y-scroll">
			<div className="absolute w-full h-52 bg-sky-800" />
			<div className="absolute t-0 grid grid-cols-1 mt-20 md:grid-cols-2 gap-7 px-10">
				<Goals />
				<Forecast />
			</div>
		</div>
	)
}

export default Home
