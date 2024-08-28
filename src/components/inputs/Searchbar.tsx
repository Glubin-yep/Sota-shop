import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'
import { productService } from 'services/ProductService.ts'
import SearchbarProductCars from 'components/products/SearchbarProductCars.tsx'
import { Link } from 'react-router-dom'
import { useOutside } from 'hooks/useOutside.ts'
import styles from './Inputs.module.scss'

function Searchbar() {
	const [searchQuery, setSearchQuery] = useState('')
	const { ref, isShow, setIsShow } = useOutside<HTMLDivElement>(false)

	const { data: products = [] } = useQuery({
		queryKey: ['search products'],
		queryFn: () => productService.getAllProductForMainPage(10)
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const filteredDishes = products.filter(product =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const handleLinkProduct = () => {
		setIsShow(false)
		setSearchQuery('')
	}

	return (
		<div className={styles.searchbar} ref={ref}>
			<div className='relative' onClick={() => setIsShow(true)}>
				<IoSearch />
				<input
					type='text'
					placeholder='Пошук...'
					value={searchQuery}
					onChange={handleInputChange}
				/>
			</div>
			{isShow && (
				<div className={styles.searchModal}>
					{filteredDishes.length > 0 ? (
						filteredDishes.map(product => (
							<Link to={`/product/${product.id}`} onClick={handleLinkProduct}>
								<SearchbarProductCars product={product} />
							</Link>
						))
					) : (
						<p className='flex justify-center py-6 text-2xl font-semibold'>
							Товар не знайдено
						</p>
					)}
				</div>
			)}
		</div>
	)
}

export default Searchbar
