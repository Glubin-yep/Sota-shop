import { FaSpinner } from 'react-icons/fa'

const LoadingScreen = () => {
	return (
		<div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
			<FaSpinner size={40} className='animate-spin' />
		</div>
	)
}

export default LoadingScreen
