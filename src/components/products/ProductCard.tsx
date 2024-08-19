import { IoCartOutline } from 'react-icons/io5'
import { ProductType } from 'types/ProductType.ts'
import styles from './ProductCard.module.scss'
import { convertPrice } from 'utils/convertPrice.ts'
import { FaStar } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

interface IProductCard {
	product: ProductType
}

function ProductCard({ product }: IProductCard) {
	return (
		<div className={styles.productCard}>
			<MdOutlineFavoriteBorder
				size={23}
				className='cursor-pointer absolute top-4 right-3'
				color='#000'
			/>
			<div className={styles.productImageWrap}>
				<img src={product?.photoURL} alt='product-image' />
			</div>
			<h1>{product?.name}</h1>
			<div className='flex items-center justify-between'>
				<p className='font-semibold text-lg flex items-center gap-1'>
					<FaStar style={{ color: 'goldenrod' }} size={20} />4
				</p>
			</div>
			<div className={styles.cardFooter}>
				<h1>
					{convertPrice(product?.price)}
					<span>₴</span>
				</h1>
				<IoCartOutline />
			</div>
		</div>
	)
}

export default ProductCard
