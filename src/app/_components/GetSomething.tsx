'use client'

import { trpc } from '../_trpc/client'

export default function GetSomething() {
	const getSomething = trpc.getSomething.useQuery()

	return (
		<>
			<h1>{JSON.stringify(getSomething.data)}</h1>
		</>
	)
}
