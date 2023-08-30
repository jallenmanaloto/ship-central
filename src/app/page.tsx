import { trpc } from './_trpc/client'
import GetSomething from './_components/GetSomething'
import Dashboard from './pages/dashboard'

export default function Home() {
	return (
		<div>
			<Dashboard />
		</div>
	)
}
