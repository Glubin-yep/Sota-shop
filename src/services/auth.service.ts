import { TAuthForm, TAuthResponse } from 'types/auth.types.ts'
import { axiosClassic } from 'api/interceptor.ts'
import { saveToStorage } from 'services/auth-token.service.ts'

export const authService = {
	async main(type: 'login' | 'register', data: TAuthForm) {
		const response = await axiosClassic.post<TAuthResponse>(
			`/auth/${type}`,
			data
		)
		if (response.data) saveToStorage(response.data)

		return response
	},

	async logout(): Promise<boolean> {
		const logout = await axiosClassic.get<boolean>('/auth/logout')
		return logout.status === 200
	}
}
