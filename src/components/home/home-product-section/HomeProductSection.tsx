import { ProductType } from 'types/ProductType.ts'
import styles from '../Home.module.scss'
import ProductCard from 'components/products/ProductCard.tsx'

interface IHomeProductSection {
	title: string
	products: ProductType[]
}

function HomeProductSection({ title, products }: IHomeProductSection) {
	return (
		<section className={styles.productSection}>
			<h1>{title}</h1>
			<div>
				{products.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	)
}

export default HomeProductSection
