'use client'

const Avatar = ({ imageUrl }: { imageUrl: string }) => {
	return (
		<>
			<img
				src={imageUrl} //"https://tecdn.b-cdn.net/img/new/avatars/2.webp"
				className="w-10 rounded-full mr-1"
				alt="Avatar"
			/>
		</>
	)
}

export default Avatar
