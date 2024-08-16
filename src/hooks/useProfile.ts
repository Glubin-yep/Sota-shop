import { useAuth } from 'hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import UserService from 'services/UserService.ts'

export const useProfile = () => {
	const { user } = useAuth()

	const { data } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: data => data,
		enabled: () => !!user
	})

	const localStorageUser = localStorage.getItem('user')
	const isAuthenticated = !!localStorageUser

	return { profile: data, isAuthenticated }
}
