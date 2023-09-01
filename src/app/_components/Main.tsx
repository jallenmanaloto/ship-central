import React from 'react'
import Header from './header'
import Content from './content'

const Main = () => {
	return (
		<div className="relative w-screen h-full bg-slate-200">
			<Header />
			<Content />
		</div>
	)
}

export default Main
