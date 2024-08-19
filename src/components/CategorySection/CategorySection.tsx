import React from 'react'
import './CategorySection.css'
import { ProductType } from 'types/ProductType.ts'
import HomeProductSection from 'components/home/home-product-section/HomeProductSection.tsx'

interface CategorySectionProps {
	category: string
	titleTop: string
	data: ProductType[] | null
	onCardClick: (id: string) => void
	onCardAllClick: (category: string) => void
}

const CategorySection: React.FC<CategorySectionProps> = ({
	category,
	titleTop,
	data
}) => {
	const filteredData = data?.filter(item => item.category === category)

	if (!filteredData) return <div>Not found</div>

	return (
		<HomeProductSection title={titleTop} products={filteredData} />
		// <div className={`product--section`} id={category}>
		// 	<div className='title'>
		// 		<h1 className='title--block'>
		// 			<p className='title--text'>{titleTop}</p>
		// 			<hr className='title--line' />
		// 		</h1>
		// 	</div>
		// 	<div className='cards--block'>
		// 		{filteredData && filteredData.length > 0 ? (
		// 			<>
		// 				{filteredData.map(item => (
		// 					<div
		// 						className='card'
		// 						key={item.id}
		// 						onClick={() => onCardClick(item.id)}
		// 					>
		// 						<img
		// 							src={item.photoURL}
		// 							className='card--photo'
		// 							alt={item.name}
		// 							loading='lazy'
		// 						/>
		// 						<span className='card--title'>{item.name}</span>
		// 						<div className='card--rating'>
		// 							<span className='star'>★</span>
		// 							<span>{item.rating ? item.rating.toFixed(1) : 'N/A'}</span>
		// 						</div>
		// 						<span className='card--price'>{item.price} грн.</span>
		// 						<Badge className='card--button'>
		// 							<a
		// 								onClick={() =>
		// 									notification.info({
		// 										message: 'Функціонал в розробці',
		// 										placement: 'topRight'
		// 									})
		// 								}
		// 							>
		// 								<ShoppingCartOutlined style={{ fontSize: '24px' }} />
		// 							</a>
		// 						</Badge>
		// 					</div>
		// 				))}
		// 				<div
		// 					className='card card--view-all'
		// 					onClick={() => onCardAllClick(category)}
		// 				>
		// 					<div className='view-all--content'>
		// 						<span className='view-all--text'>View All {category}</span>
		// 					</div>
		// 				</div>
		// 			</>
		// 		) : (
		// 			<p>No products available in this category.</p>
		// 		)}
		// 	</div>
		// </div>
	)
}

export default CategorySection
