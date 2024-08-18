import styles from './Sidebar.module.scss'
import CategoryData from './Category.json'
import AddressIcon from '../../../public/catalog/pin.png'
import Instagram from '../../../public/catalog/instagram.png'
import Facebook from '../../../public/catalog/facebook.png'
import { Link } from 'react-router-dom'

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebarContent}>
				<div className={styles.top}>
					{CategoryData.map(category => (
						<div className={styles.sidebarItem}>
							<img src={category.icon} alt='sidebar-item-icon' />
							<span>{category.title}</span>
						</div>
					))}
				</div>
				<div className={styles.bottom}>
					<hr />
					<div className={styles.sidebarAddressItem}>
						<img src={AddressIcon} alt='address-icon' />
						<span>м. Тернопіль, Вулиця 20</span>
					</div>
					<hr />
					<div className={styles.socialMedia}>
						<h1>Ми в соціальних мережах</h1>
						<div>
							<Link to='https://instagram.com' target='_blank'>
								<img src={Instagram} alt='instagram-icon' />
							</Link>
							<Link to='https://facebook.com' target='_blank'>
								<img src={Facebook} alt='facebook-icon' />
							</Link>
						</div>
					</div>
					<hr />
					<div className={styles.additionalInfo}>
						<h1>Інформація про компанію</h1>
						<ul>
							<Link to='/about'>
								<li>Про нас</li>
							</Link>
							<Link to='/contacts'>
								<li>Контакти</li>
							</Link>
							<Link to='/service'>
								<li>Ремонт</li>
							</Link>
						</ul>
						<p>Умови використання сайту</p>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
