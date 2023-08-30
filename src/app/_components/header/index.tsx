import { GrMenu } from 'react-icons/gr'
import Avatar from './Avatar'

const Header = () => {
	return (
		<div className="h-[60px] w-full max-w-full bg-white">
			<div className="nav-bar h-full w-full px-6 py-2.5">
				<div className="h-full flex justify-between items-center">
					<div className="sm:block md:opacity-0 cursor-none">
						<GrMenu size={18} />
					</div>
					<div className="flex justify-center items-center">
						<h4 className="pr-2">Name</h4>
						<Avatar imageUrl="https://tecdn.b-cdn.net/img/new/avatars/2.webp" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
