import styles from './BottomMenu.module.scss'
import { PiHouse, PiSquaresFourLight } from 'react-icons/pi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function MobileBottomMenu() {
	return (
		<div className={styles.bottomMenu}>
			<Link to='/'>
				<PiHouse size={25} />
			</Link>
			<Link to='/catalog'>
				<PiSquaresFourLight size={25} />
			</Link>
			<Link to='/favorite'>
				<MdOutlineFavoriteBorder size={25} />
			</Link>
			<Link to='/cart'>
				<IoCartOutline size={25} />
			</Link>
			<Link to='/profile'>
				<AiOutlineUser size={25} />
			</Link>
		</div>
	)
}

export default MobileBottomMenu
