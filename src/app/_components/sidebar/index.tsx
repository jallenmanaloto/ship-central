import DefaultNav from './DefaultNav'
import MobileNav from './MobileNav'

const Sidebar = () => {
	return (
		<>
			<div className="hidden lg:block">
				<DefaultNav />
			</div>
			<div className="block md:hidden">
				<MobileNav />
			</div>
		</>
	)
}

export default Sidebar
