'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function SignIn() {
	return (
		<>
			<Link href="/">
				<div className="absolute top-6 left-5 cursor-pointer">
					<div className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<h3 className="text-base text-slate-700 font-semibold px-1">
							Home
						</h3>
					</div>
				</div>
			</Link>
			<div className="block sm:w-5/6 md:w-[40%] md:h-3/5 rounded-lg bg-white p-10 mb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
				<h1 className="text-xl font-bold text-slate-600">Sign In</h1>
				<h3 className="text-base py-3 text-slate-500">
					Log in using your email and password
				</h3>
				<div className="pt-5">
					<h3 className="text-base text-slate-600">Username or email</h3>
					<Input
						className="outline-none mt-2 focus-visible:ring-transparent"
						placeholder="Enter username or email"
					/>
				</div>
				<div className="pt-4">
					<h3 className="text-base text-slate-600">Password</h3>
					<Input
						className="outline-none focus-visible:ring-transparent mt-2"
						placeholder="Enter password"
					/>
				</div>
				<Button className="w-full mt-5">Sign In</Button>
				<Separator className="my-4 bg-slate-300" />
				<Button
					onClick={() =>
						signIn('google', {
							callbackUrl: 'https://ship-central.vercel.app/dashboard',
						})
					}
					className="w-full bg-white border-slate-300 border-x border-y cursor-pointer">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24">
							<path
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								fill="#4285F4"
							/>
							<path
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								fill="#34A853"
							/>
							<path
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								fill="#FBBC05"
							/>
							<path
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								fill="#EA4335"
							/>
							<path d="M1 1h22v22H1z" fill="none" />
						</svg>
						<h3 className="px-5 text-base text-black">Sign in with Google</h3>
					</div>
				</Button>
			</div>
		</>
	)
}
