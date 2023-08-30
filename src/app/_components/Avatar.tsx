'use client'

import { useEffect } from 'react'

const Avatar = ({ imageUrl }: { imageUrl: string }) => {
	// useEffect(() => {
	// 	const init = async () => {
	// 		const { Avatar } = await import('tw-elements')
	// 	}
	// 	init()
	// }, [])

	return (
		<>
			<img
				src={imageUrl} //"https://tecdn.b-cdn.net/img/new/avatars/2.webp"
				className="w-10 rounded-full"
				alt="Avatar"
			/>
		</>
	)
}

export default Avatar
