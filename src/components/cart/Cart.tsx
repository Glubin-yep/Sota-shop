import CartProductCard from 'components/cart/CartProductCard.tsx'
import styles from './Cart.module.scss'
import { useCart } from 'react-use-cart'
import Button from 'components/buttons/Button.tsx'
import { convertPrice } from 'utils/convertPrice.ts'
import useWindowSize from 'hooks/useWindowSize.ts'

function Cart() {
	const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } =
		useCart()

	const { width } = useWindowSize()

	const isTablet = width ? width < 1260 && width > 992 : false

	if (isEmpty)
		return (
			<p className='font-semibold text-2xl text-center mt-10'>Корзина пуста</p>
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
					<Button type='button' size={isTablet ? 'small' : 'default'}>
						Оформити замовлення
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Cart
