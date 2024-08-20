import { ProductType } from 'types/ProductType.ts'

function SearchbarProductCars({ product }: { product: ProductType }) {
	return (
		<div className='flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-light-gray'>
			<img src={product.photoURL} alt='product-image' className='w-14' />
			<h1>{product.name}</h1>
		</div>
	)
}

export default SearchbarProductCars
