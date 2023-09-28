'use client'

import { signIn } from 'next-auth/react'

export default function Landing() {
	return (
		<>
			<div> HOME PAGE</div>
			<button onClick={() => signIn('google')}>Google Signin</button>
		</>
	)
}
