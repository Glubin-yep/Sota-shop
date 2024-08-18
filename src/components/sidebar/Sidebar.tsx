import styles from './Sidebar.module.scss'
import CategoryData from './Category.json'
import AddressIcon from '../../../public/catalog/pin.png'
import Instagram from '../../../public/catalog/instagram.png'
import Facebook from '../../../public/catalog/facebook.png'

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebarContent}>
				{CategoryData.map(category => (
					<div className={styles.sidebarItem}>
						<img src={category.icon} alt='sidebar-item-icon' />
						<span>{category.title}</span>
					</div>
				))}
				<hr />
				<div className={styles.sidebarItem}>
					<img src={AddressIcon} alt='address-icon' />
					<span>м. Тернопіль, Вулиця 20</span>
				</div>
				<hr />
				<div className={styles.socialMedia}>
					<h1>Ми в соціальних мережах</h1>
					<div>
						<img src={Instagram} alt='instagram-icon' />
						<img src={Facebook} alt='facebook-icon' />
					</div>
				</div>
				<hr />
			</div>
		</aside>
	)
}

export default Sidebar
