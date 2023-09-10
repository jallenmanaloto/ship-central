'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { useState } from 'react'
import { trpc } from './client'

export default function Provider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}))
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: 'https://ship-central.vercel.app/api/trpc', // change domain on prod to ship-central.vercel.app
				}),
			],
		})
	)

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	)
}
