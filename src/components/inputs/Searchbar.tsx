import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'
import { productService } from 'services/ProductService.ts'
import SearchbarProductCars from 'components/products/SearchbarProductCars.tsx'
import { Link } from 'react-router-dom'
import { useOutside } from 'hooks/useOutside.ts'

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

	return (
		<div className='w-[535px]' ref={ref}>
			<div className='relative' onClick={() => setIsShow(true)}>
				<IoSearch className='absolute text-black top-3 left-4' size={20} />
				<input
					type='text'
					placeholder='Пошук...'
					className='w-full rounded-full pl-12 px-6 py-2 text-black outline-none text-lg placeholder:text-border'
					onChange={handleInputChange}
				/>
			</div>
			{isShow && (
				<div className='absolute top-[70px] bg-bg-color w-[535px] rounded-xl p-2 px-4 shadow-xl max-h-80 overflow-auto'>
					{filteredDishes.length > 0 ? (
						filteredDishes.map(product => (
							<Link to={`product/${product.id}`}>
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
