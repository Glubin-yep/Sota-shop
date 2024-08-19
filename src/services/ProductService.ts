import { ProductDetails } from '../types/ProductDetails'
import { ProductType } from '../types/ProductType'
import { axiosClassic } from 'api/interceptor.ts'

export const productService = {
	async getAllProductForMainPage(amount: number): Promise<ProductType[]> {
		try {
			const response = await axiosClassic.get<ProductType[]>(
				`/products/mainpage/${amount}`
			)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	},

	async getProductByID(id: string | number) {
		try {
			const response = await axiosClassic.get<ProductDetails>(`/products/${id}`)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	},

	async getAllProductByCategory(category: string): Promise<ProductDetails[]> {
		try {
			const response = await axiosClassic.get<ProductDetails[]>(
				`/products/category/${category}`
			)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	}
}
