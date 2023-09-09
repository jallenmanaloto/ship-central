import React from 'react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LctSearch from '../../search/LctSearch'

const SampleCards = () => {
	return (
		<Card>
			<CardHeader>
				<h2 className="text-base font-semibold text-neutral-800">Sample LCT</h2>
				<CardDescription>Cargo capacity: 5000</CardDescription>
			</CardHeader>
		</Card>
	)
}

const LctTabs = () => {
	return (
		<div className="pt-5 pb-52 w-full">
			<Tabs defaultValue="lct" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger className="font-bold" value="LCT">
						LCTs
					</TabsTrigger>
					<TabsTrigger className="font-bold" value="Trips">
						Trips
					</TabsTrigger>
				</TabsList>
				<TabsContent value="LCT">
					{/* Content#1 here */}
					<LctSearch />
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<SampleCards />
						<SampleCards />
						<SampleCards />
						<SampleCards />
						<SampleCards />
					</div>
				</TabsContent>
				<TabsContent value="Trips">
					{/* Content#2 here */}
					<Card>
						<CardHeader>
							<CardTitle>Password</CardTitle>
							<CardDescription>
								Change your password here. After saving, you'll be logged out.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="current">Current password</Label>
								<Input id="current" type="password" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="new">New password</Label>
								<Input id="new" type="password" />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default LctTabs
