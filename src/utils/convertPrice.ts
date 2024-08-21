export const convertPrice = (price: number | string | undefined) => {
	if (price === undefined) return ''
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
