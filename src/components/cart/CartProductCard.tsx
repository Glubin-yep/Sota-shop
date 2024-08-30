import styles from './Cart.module.scss'
import { convertPrice } from 'utils/convertPrice.ts'
import { Item } from 'react-use-cart'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface ICartProductCard {
	item: Item
	updateItemQuantity: (id: string, quantity: number) => void
	removeItem: (id: string) => void
}

function CartProductCard({
	item,
	updateItemQuantity,
	removeItem
}: ICartProductCard) {
	const quantity = item.quantity ?? 1

	return (
		<div className={styles.cartProductCard}>
			<div className={styles.imageWrapper}>
				<img src={item.image} alt='product-image' />
			</div>
			<div>
				<h1>{item.name}</h1>
				<AiOutlineDelete
					onClick={() => removeItem(item.id)}
					style={{ color: '#dc2626' }}
				/>
				<div>
					<p>{convertPrice(item.price)} грн.</p>
					<div>
						<button
							className='cursor-pointer p-2 rounded-full flex items-center justify-center bg-light-gray'
							onClick={() => updateItemQuantity(item.id, quantity - 1)}
							disabled={item.quantity === 1}
						>
							<FiMinus className='w-4 max-sm:w-2 max-sm:h-2' />
						</button>
						<span>{item.quantity}</span>
						<button
							className='cursor-pointer p-2 rounded-full flex items-center justify-center bg-light-gray'
							onClick={() => updateItemQuantity(item.id, quantity + 1)}
						>
							<FiPlus className='w-4 max-sm:w-2 max-sm:h-2' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartProductCard
