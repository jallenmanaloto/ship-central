import Weather from '../cards/Weather'
import Temp from './Temp'
import SunStat from './SunStat'

const Forecast = () => {
	return (
		<div className="grid grid-row-2 gap-y-3">
			<Weather />
			<div className="grid grid-cols-2 md:grid-cols-2 gap-4">
				<Temp />
				<SunStat />
			</div>
		</div>
	)
}

export default Forecast
