import { UserInfoType } from '../types/UserInfoType'
import { axiosClassic } from 'api/interceptor.ts'

export default class UserService {
	static async getProfile(): Promise<UserInfoType> {
		try {
			const response = await axiosClassic.get<UserInfoType>(`/users/me`)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	}
}
