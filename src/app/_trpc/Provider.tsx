'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { useState } from 'react'
import { trpc } from './client'

export default function Provider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}))
	const appUrl =
		process.env.NODE_ENV === 'production'
			? process.env.PRODUCTION_APP_URL || ''
			: process.env.LOCAL_APP_URL || ''
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: 'https://ship-central.vercel.app', // change domain on prod to ship-central.vercel.app
					fetch(url, options) {
						return fetch(url, {
							...options,
							credentials: 'include',
						})
					},
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
