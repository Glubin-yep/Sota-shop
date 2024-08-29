import CartProductCard from 'components/cart/CartProductCard.tsx'
import styles from './Cart.module.scss'
import { useCart } from 'react-use-cart'
import Button from 'components/buttons/Button.tsx'
import { convertPrice } from 'utils/convertPrice.ts'

function Cart() {
	const {
		isEmpty,
		items,
		updateItemQuantity,
		removeItem,
		cartTotal,
		emptyCart
	} = useCart()

	if (isEmpty)
		return (
			<p className='font-semibold text-2xl text-center mt-10'>
				Your cart is empty
			</p>
		)

	return (
		<section className={styles.cart}>
			<h1>Кошик</h1>
			<div>
				<div className={styles.cardList}>
					{items.map(item => (
						<CartProductCard
							item={item}
							key={item.id}
							updateItemQuantity={updateItemQuantity}
							removeItem={removeItem}
						/>
					))}
				</div>
				<div className={styles.cartTotal}>
					<h1>Загальна сума: {convertPrice(cartTotal)} грн.</h1>
					<Button type='button' onClick={() => emptyCart()}>
						Очистити корзину
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Cart
