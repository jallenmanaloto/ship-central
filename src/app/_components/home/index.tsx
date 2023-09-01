import React from 'react'
import Goals from '../cards/Goals'
import Forecast from '../forecast'

const Home = () => {
	return (
		<div className="">
			<div className="w-full h-52 bg-sky-800" />
			<div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-7 -mt-20 px-10">
				<Goals />
				<Forecast />
			</div>
		</div>
	)
}

export default Home
