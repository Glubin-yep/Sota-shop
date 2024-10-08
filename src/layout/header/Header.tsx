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
import { useState } from 'react'
import Auth from 'components/auth/Auth.tsx'
import Searchbar from 'components/inputs/Searchbar.tsx'
import { useCart } from 'react-use-cart'

function Header() {
	const { isAuthenticated } = useProfile()
	const [isOpenAuthForm, setIsOpenAuthForm] = useState(false)
	const { isShow, setIsShow, ref } = useOutside<HTMLDivElement>(false)
	const { logout } = useActions()
	const { totalUniqueItems } = useCart()

	const handleOpenAuthForm = () => {
		setIsOpenAuthForm(true)
	}

	const handleLogout = async () => {
		logout()
		setIsShow(false)
		setIsOpenAuthForm(false)
	}

	return (
		<header className={styles.header}>
			<Link to='/'>
				<img src={LogoImage} alt='logo' className='w-40 max-sm:w-32' />
			</Link>
			<Searchbar />
			<div className={styles.userNav} ref={ref}>
				<Link to='/favorite'>
					<MdOutlineFavoriteBorder
						size={30}
						style={{ cursor: 'pointer' }}
						color='#fff'
					/>
				</Link>
				<Link to='/cart'>
					<div className='relative'>
						<IoCartOutline
							size={30}
							style={{ cursor: 'pointer' }}
							color='#fff'
						/>
						{totalUniqueItems > 0 && (
							<span className='w-6 h-6 absolute -top-2.5 -right-2.5 text-center font-semibold rounded-full bg-light-gray'>
								{totalUniqueItems}
							</span>
						)}
					</div>
				</Link>
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
					<>
						<Button
							type='button'
							onClick={handleOpenAuthForm}
							variant='light'
							size='medium'
						>
							Ввійти
						</Button>
						{isOpenAuthForm && (
							<Auth onClose={() => setIsOpenAuthForm(false)} />
						)}
					</>
				)}
			</div>
		</header>
	)
}

export default Header
