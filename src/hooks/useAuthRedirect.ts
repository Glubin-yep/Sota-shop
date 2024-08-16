import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useProfile } from 'hooks/useProfile.ts'

export const useAuthRedirect = () => {
	const { isAuthenticated } = useProfile()

	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) navigate('/')
	}, [navigate, isAuthenticated])
}
