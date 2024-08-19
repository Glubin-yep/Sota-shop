import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loader from 'components/Loader/Loader.tsx'
import { productService } from 'services/ProductService.ts'
import { ProductDetails } from 'types/ProductDetails.ts'
import ProductDetailsComponent from 'components/products/product-page/ProductDetails.tsx'
import Button from 'components/buttons/Button.tsx'
import { IoCartOutline } from 'react-icons/io5'
import styles from '../ProductCard.module.scss'
import { FaStar } from 'react-icons/fa'
import { convertPrice } from 'utils/convertPrice.ts'

function ProductPage() {
	const { id } = useParams<{ id: string }>()
	const productId = id ? parseInt(id, 10) : undefined

	const { data: product, status } = useQuery<ProductDetails>({
		queryKey: ['product', id],
		queryFn: () =>
			productId
				? productService.getProductByID(productId)
				: Promise.reject('Happened something bad!'),
		enabled: !!productId
	})
	if (status === 'pending') return <Loader />
	if (status === 'error') return <div>Not found</div>
	if (!product) return <div>Not found</div>

	return (
		<section className={styles.productPage}>
			<div className={styles.imageWrap}>
				<img src={product.photoURL} alt='product-image' />
			</div>
			<div>
				<h1 className={styles.title}>{product.name}</h1>
				<p className={styles.brand}>
					{product.brand} - {product.category}
				</p>
				<p className={styles.rating}>
					<FaStar size={20} style={{ color: 'goldenrod' }} />
					{product.rating}
				</p>
				<p className={styles.productPrice}>
					{convertPrice(product.price)}
					<span>₴</span>
				</p>
				<hr />
				<h1 className={styles.detailsTitle}>Характеристики:</h1>
				<ProductDetailsComponent product={product} />
				<hr />
				<Button type='button' className='flex items-center gap-2 m-auto'>
					<IoCartOutline size={25} />
					Додати в корзину
				</Button>
			</div>
		</section>
	)
}

export default ProductPage
