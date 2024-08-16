import styles from './Header.module.scss'
import LogoImage from 'assets/logo.svg'
import { Link } from 'react-router-dom'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import Button from 'components/buttons/Button.tsx'
import { useProfile } from 'hooks/useProfile.ts'
import { useOutside } from 'hooks/useOutside.ts'
import HeaderDropdown from 'components/HeaderDropdown.tsx'
import { useActions } from 'hooks/useActions.ts'

function Header() {
	const { isAuthenticated } = useProfile()
	const { isShow, setIsShow, ref } = useOutside(false)
	const { logout } = useActions()

	const handleLogout = async () => {
		logout()
		setIsShow(false)
	}

	return (
		<header className={styles.header} ref={ref}>
			<Link to='/'>
				<img src={LogoImage} alt='logo' className='w-20' />
			</Link>
			<div className={styles.userNav}>
				<Link to='/favorite'>
					<MdOutlineFavoriteBorder
						size={30}
						style={{ cursor: 'pointer' }}
						color='#fff'
					/>
				</Link>
				<IoCartOutline size={30} style={{ cursor: 'pointer' }} color='#fff' />
				{isAuthenticated ? (
					<>
						<AiOutlineUser
							size={30}
							style={{ cursor: 'pointer' }}
							onClick={() => setIsShow(!isShow)}
							color='#fff'
						/>
						{isShow && (
							<div className={styles.modal}>
								<HeaderDropdown handleLogout={handleLogout} />
							</div>
						)}
					</>
				) : (
					<Link to='/auth'>
						<Button type='button'>Login</Button>
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
