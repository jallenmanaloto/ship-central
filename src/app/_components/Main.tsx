import React from 'react'
import Header from './header'
import Content from './content'

const Main = () => {
	return (
		<div className="relative w-screen h-screen bg-slate-200 overflow-y-scroll">
			<Header />
			<Content />
		</div>
	)
}

export default Main