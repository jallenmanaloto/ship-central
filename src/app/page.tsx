import { trpc } from './_trpc/client'
import GetSomething from './_components/GetSomething'
import Header from './_components/header'

export default function Home() {
	return (
		<div className="bg-slate-500">
			<Header />
		</div>
	)
}
