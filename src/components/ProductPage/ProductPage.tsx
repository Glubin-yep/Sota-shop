import React from 'react'
import './ProductPage.css'

interface ProductDetailProps {
	id: string
	onChangeContent: (content: React.ReactNode) => void // Додано пропс для обробки повернення на головну
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
	return (
		<h1>All good</h1>
		// <div className='product-detail'>
		// 	<Button
		// 		type='link'
		// 		icon={<ArrowLeftOutlined />}
		// 		onClick={() =>
		// 			onChangeContent(<ShopPage onChangeContent={onChangeContent} />)
		// 		}
		// 		className='back-button'
		// 	>
		// 		Повернутися на головну
		// 	</Button>
		// 	<div className='product-detail--container'>
		// 		<img
		// 			src={product.photoURL}
		// 			className='product-detail--photo'
		// 			alt={product.name}
		// 		/>
		// 		<div className='product-detail--info'>
		// 			<h1 className='product-detail--title'>{product.name}</h1>
		// 			<div className='product-detail--rating'>
		// 				<span className='star'>★</span>
		// 				<span>{product.rating ? product.rating.toFixed(1) : 'N/A'}</span>
		// 			</div>
		// 			<p className='product-detail--price'>{product.price} грн.</p>
		//
		// 			{/* Displaying general description */}
		// 			<p className='product-detail--description'>Характеристики:</p>
		//
		// 			<Badge className='product-detail--button'>
		// 				<a
		// 					className='product-detail--cart-link'
		// 					onClick={() =>
		// 						notification.info({
		// 							message: 'Функціонал в розробці',
		// 							placement: 'topRight'
		// 						})
		// 					}
		// 				>
		// 					<ShoppingCartOutlined style={{ fontSize: '24px' }} />
		// 					Добавити у корзину
		// 				</a>
		// 			</Badge>
		//
		// 			<DeliveryInfo />
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default ProductDetail
