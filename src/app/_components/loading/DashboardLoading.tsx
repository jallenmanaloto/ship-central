import CircularProgress from '@mui/joy/CircularProgress'

export default function DashboardLoading() {
	return (
		<CircularProgress
			color="neutral"
			determinate={false}
			size="md"
			value={40}
			variant="soft"
		/>
	)
}
