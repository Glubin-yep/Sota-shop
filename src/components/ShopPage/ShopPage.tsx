import { useState, useEffect } from 'react'
import CategorySection from '../CategorySection/CategorySection'
import LoadingScreen from '../Loader/Loader'
import categoriesData from '../sidebar/Category.json'
import { ProductType } from 'types/ProductType'
import ProductPage from '../ProductPage/ProductPage'
import CategoryPage from '../CategoryPage/CategoryPage'
import { productService } from 'services/ProductService.ts'

interface ShopPageProps {
	onChangeContent: (content: React.ReactNode) => void
}

export default function ShopPage({ onChangeContent }: ShopPageProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<ProductType[] | null>(null)
	const [selectedProductID, setSelectedProductID] = useState<string | null>(
		null
	)

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			try {
				const response = await productService.getAllProductForMainPage(10)
				setData(response)
			} catch (error) {
				console.error('Error fetching data:', error)
				setData(null)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (selectedProductID) {
			onChangeContent(
				<ProductPage id={selectedProductID} onChangeContent={onChangeContent} />
			)
		}
	}, [selectedProductID, onChangeContent])

	const handleCardClick = (id: string) => {
		setSelectedProductID(id)
	}

	const handleCardAllClick = (category: string) => {
		onChangeContent(
			<CategoryPage category={category} onChangeContent={onChangeContent} />
		)
	}

	if (isLoading) {
		return <LoadingScreen />
	}

	return (
		<div className='main'>
			{!selectedProductID &&
				data &&
				categoriesData.map(category => (
					<CategorySection
						key={category.id}
						titleTop={category.title}
						category={category.category}
						data={data}
						onCardClick={handleCardClick}
						onCardAllClick={handleCardAllClick}
					/>
				))}
		</div>
	)
}
