import { ProductDetails } from 'types/ProductDetails.ts'
import styles from '../ProductCard.module.scss'

function ProductDetailsComponent({ product }: { product: ProductDetails }) {
	const renderLaptopDetails = () => (
		<>
			{product.laptopDetails?.CPU && (
				<p>
					<strong className={styles.detailsItemTitle}>CPU:</strong>{' '}
					{product.laptopDetails.CPU}
				</p>
			)}
			{product.laptopDetails?.RAM && (
				<p>
					<strong className={styles.detailsItemTitle}>RAM:</strong>{' '}
					{product.laptopDetails.RAM} GB
				</p>
			)}
			{product.laptopDetails?.ROM && (
				<p>
					<strong className={styles.detailsItemTitle}>ROM:</strong>{' '}
					{product.laptopDetails.ROM} GB
				</p>
			)}
			{product.laptopDetails?.video_card && (
				<p>
					<strong className={styles.detailsItemTitle}>Video Card:</strong>{' '}
					{product.laptopDetails.video_card}
				</p>
			)}
			{product.laptopDetails?.VRAM && (
				<p>
					<strong className={styles.detailsItemTitle}>VRAM:</strong>{' '}
					{product.laptopDetails.VRAM} GB
				</p>
			)}
			{product.laptopDetails?.refresh_rate && (
				<p>
					<strong className={styles.detailsItemTitle}>Refresh Rate:</strong>{' '}
					{product.laptopDetails.refresh_rate} Hz
				</p>
			)}
		</>
	)

	const renderComputerDetails = () => (
		<>
			{product.computerDetails?.CPU && (
				<p>
					<strong className={styles.detailsItemTitle}>CPU:</strong>{' '}
					{product.computerDetails.CPU}
				</p>
			)}
			{product.computerDetails?.RAM && (
				<p>
					<strong className={styles.detailsItemTitle}>RAM:</strong>{' '}
					{product.computerDetails.RAM} GB
				</p>
			)}
			{product.computerDetails?.ROM && (
				<p>
					<strong className={styles.detailsItemTitle}>ROM:</strong>{' '}
					{product.computerDetails.ROM} GB
				</p>
			)}
			{product.computerDetails?.video_card && (
				<p>
					<strong className={styles.detailsItemTitle}>Video Card:</strong>{' '}
					{product.computerDetails.video_card}
				</p>
			)}
			{product.computerDetails?.RAM_version && (
				<p>
					<strong className={styles.detailsItemTitle}>RAM Version:</strong>{' '}
					{product.computerDetails.RAM_version}
				</p>
			)}
		</>
	)

	const renderSmartphoneDetails = () => (
		<>
			{product.smartphoneDetails?.camera && (
				<p>
					<strong className={styles.detailsItemTitle}>Camera:</strong>{' '}
					{product.smartphoneDetails.camera}
				</p>
			)}
			{product.smartphoneDetails?.RAM && (
				<p>
					<strong className={styles.detailsItemTitle}>RAM:</strong>{' '}
					{product.smartphoneDetails.RAM} GB
				</p>
			)}
			{product.smartphoneDetails?.ROM && (
				<p>
					<strong className={styles.detailsItemTitle}>ROM:</strong>{' '}
					{product.smartphoneDetails.ROM} GB
				</p>
			)}
			{product.smartphoneDetails?.batteryCapacity && (
				<p>
					<strong className={styles.detailsItemTitle}>Battery Capacity:</strong>{' '}
					{product.smartphoneDetails.batteryCapacity} mAh
				</p>
			)}
			{product.smartphoneDetails?.refresh_rate && (
				<p>
					<strong className={styles.detailsItemTitle}>Refresh Rate:</strong>{' '}
					{product.smartphoneDetails.refresh_rate} Hz
				</p>
			)}
			{product.smartphoneDetails?.sim_slot && (
				<p>
					<strong className={styles.detailsItemTitle}>SIM Slot:</strong>{' '}
					{product.smartphoneDetails.sim_slot}
				</p>
			)}
		</>
	)

	const renderAccessoriesDetails = () => (
		<>
			{product.accessoriesDetails?.type && (
				<p>
					<strong className={styles.detailsItemTitle}>Type:</strong>{' '}
					{product.accessoriesDetails.type}
				</p>
			)}
			{product.accessoriesDetails?.compatibility && (
				<p>
					<strong className={styles.detailsItemTitle}>Compatibility:</strong>{' '}
					{product.accessoriesDetails.compatibility}
				</p>
			)}
		</>
	)

	const renderSmartHomeDetails = () => (
		<>
			{product.smartHomeDetails?.type_conection && (
				<p>
					<strong className={styles.detailsItemTitle}>
						Type of Connection:
					</strong>{' '}
					{product.smartHomeDetails.type_conection}
				</p>
			)}
			{product.smartHomeDetails?.wireless_standart && (
				<p>
					<strong className={styles.detailsItemTitle}>
						Wireless Standard:
					</strong>{' '}
					{product.smartHomeDetails.wireless_standart}
				</p>
			)}
			{product.smartHomeDetails?.compatibility && (
				<p>
					<strong className={styles.detailsItemTitle}>Compatibility:</strong>{' '}
					{product.smartHomeDetails.compatibility}
				</p>
			)}
		</>
	)

	const renderTVDetails = () => (
		<>
			{product.tvDetails?.screenResolution && (
				<p>
					<strong className={styles.detailsItemTitle}>
						Screen Resolution:
					</strong>{' '}
					{product.tvDetails.screenResolution}
				</p>
			)}
			{product.tvDetails?.smartTV && (
				<p>
					<strong className={styles.detailsItemTitle}>Smart TV:</strong>{' '}
					{product.tvDetails.smartTV ? 'Yes' : 'No'}
				</p>
			)}
			{product.tvDetails?.matrix_type && (
				<p>
					<strong className={styles.detailsItemTitle}>Matrix Type:</strong>{' '}
					{product.tvDetails.matrix_type}
				</p>
			)}
			{product.tvDetails?.OS && (
				<p>
					<strong className={styles.detailsItemTitle}>Operating System:</strong>{' '}
					{product.tvDetails.OS}
				</p>
			)}
		</>
	)

	const renderSoftwareDetails = () => (
		<>
			{product.softwareDetails?.term_of_the_license && (
				<p>
					<strong className={styles.detailsItemTitle}>
						Term of the License:
					</strong>{' '}
					{product.softwareDetails.term_of_the_license}
				</p>
			)}
			{product.softwareDetails?.Number_of_users && (
				<p>
					<strong className={styles.detailsItemTitle}>Number of Users:</strong>{' '}
					{product.softwareDetails.Number_of_users}
				</p>
			)}
			{product.softwareDetails?.type && (
				<p>
					<strong className={styles.detailsItemTitle}>Type:</strong>{' '}
					{product.softwareDetails.type}
				</p>
			)}
		</>
	)

	const renderKitchenDetails = () => (
		<>
			{product.kitchenDetails?.origin && (
				<p>
					<strong className={styles.detailsItemTitle}>Origin:</strong>{' '}
					{product.kitchenDetails.origin}
				</p>
			)}
		</>
	)

	return (
		<div>
			{product.category === 'Laptop' && renderLaptopDetails()}
			{product.category === 'Computer' && renderComputerDetails()}
			{product.category === 'Smartphone' && renderSmartphoneDetails()}
			{product.category === 'Accessories' && renderAccessoriesDetails()}
			{product.category === 'SmartHome' && renderSmartHomeDetails()}
			{product.category === 'TV' && renderTVDetails()}
			{product.category === 'Software' && renderSoftwareDetails()}
			{product.category === 'Kitchen' && renderKitchenDetails()}
		</div>
	)
}

export default ProductDetailsComponent
