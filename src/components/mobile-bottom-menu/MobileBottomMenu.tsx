import styles from './BottomMenu.module.scss'
import { PiHouse, PiSquaresFourLight } from 'react-icons/pi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import cn from 'clsx'

function MobileBottomMenu() {
	return (
		<div className={styles.bottomMenu}>
			<NavLink
				to='/'
				className={({ isActive }) => cn(isActive && styles.activeLink)}
			>
				<PiHouse size={25} />
			</NavLink>
			<NavLink
				to='/catalog'
				className={({ isActive }) => cn(isActive && styles.activeLink)}
			>
				<PiSquaresFourLight size={25} />
			</NavLink>
			<NavLink
				to='/favorite'
				className={({ isActive }) => cn(isActive && styles.activeLink)}
			>
				<MdOutlineFavoriteBorder size={25} />
			</NavLink>
			<NavLink
				to='/cart'
				className={({ isActive }) => cn(isActive && styles.activeLink)}
			>
				<IoCartOutline size={25} />
			</NavLink>
			<NavLink
				to='/profile'
				className={({ isActive }) => cn(isActive && styles.activeLink)}
			>
				<AiOutlineUser size={25} />
			</NavLink>
		</div>
	)
}

export default MobileBottomMenu
