'use client'

import Link from 'next/link'
import mainHero from '../../../../public/main-hero.svg'
import { Button } from '@/components/ui/button'

export default function Landing() {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row bg-neutral-900 bg-opacity-95 pb-8">
				<div className=" md:pl-4 md:pt-28 md:w-1/2">
					<h1 className="text-2xl md:text-6xl pt-20 px-7 font-bold text-slate-50 tracking-wider">
						Ship Central
					</h1>
					<div className="px-7 py-4">
						<h2 className="text-slate-100 font-medium md:w-[420px] tracking-wide text-opacity-40">
							Your one-stop management tool to handle all of your ships'
							activities and trips.
						</h2>
						<Link href="/dashboard">
							<Button className="mt-7 w-44 bg-slate-200 text-slate-800 text-base font-semibold tracking-wider hover:bg-slate-400">
								Get started
							</Button>
						</Link>
					</div>
				</div>
				<div className="flex justify-center pt-10 md:pl-24">
					<div
						className="xs:w-96 xs:h-96 md:w-[500px] md:h-[500px]"
						style={{ backgroundImage: `url(${mainHero.src})` }}></div>
				</div>
			</div>
		</>
	)
}
