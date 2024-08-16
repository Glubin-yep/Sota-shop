import { TAuthResponse } from 'types/auth.types.ts'
import { authService } from 'services/auth.service.ts'

export const saveToStorage = (data: TAuthResponse) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { token, ...rest } = data
	localStorage.setItem('user', JSON.stringify(rest))
}

export const removeFromStorage = async () => {
	await authService.logout()
	localStorage.removeItem('user')
}
