import { ProductDetails } from '../types/ProductDetails'
import { ProductType } from '../types/ProductType'
import { axiosClassic } from 'api/interceptor.ts'

export default class ProductService {
	static async getAllProductForMainPage(
		amount: number
	): Promise<ProductType[]> {
		try {
			const response = await axiosClassic.get<ProductType[]>(
				`/products/mainpage/${amount}`
			)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	}

	static async getProductByID(id: string): Promise<ProductDetails> {
		try {
			const response = await axiosClassic.get<ProductDetails>(`/products/${id}`)
			return response.data
		} catch (error) {
			console.error('Error while fetching files:', error)
			throw error
		}
	}

	static async getAllProductByCategory(
		category: string
	): Promise<ProductDetails[]> {
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
