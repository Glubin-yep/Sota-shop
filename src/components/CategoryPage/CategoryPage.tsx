import React from 'react'
import './CategoryPage.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { productService } from 'services/ProductService.ts'
import Loader from 'components/Loader/Loader.tsx'
import ProductCard from 'components/products/ProductCard.tsx'
import styles from 'components/home/Home.module.scss'

interface CategoryPageProps {
	category?: string
	onChangeContent?: (content: React.ReactNode) => void
}

const CategoryPage: React.FC<CategoryPageProps> = () => {
	const { category } = useParams()

	const { data: products, status } = useQuery({
		queryKey: ['category products', category],
		queryFn: () => productService.getAllProductByCategory(category)
	})

	if (status === 'pending') return <Loader />
	if (status === 'error') return <h1>Error</h1>

	return (
		<section className={styles.productSection}>
			<div>
				{products?.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
			{products?.length === 0 && (
				<h1 className='h-full w-full flex items-center justify-center'>
					Тут ще немає товарів
				</h1>
			)}
		</section>
	)
}

export default CategoryPage
