import { trpc } from './_trpc/client'
import GetSomething from './_components/GetSomething'

export default function Home() {
	return (
		<>
			<GetSomething />
		</>
	)
}
