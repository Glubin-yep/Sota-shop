import React, { useState, useEffect } from 'react'
import { Badge, Avatar, Layout, Modal, notification, AutoComplete } from 'antd'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import './Header.css'
import logo from '../../assets/LogoPlaceholder.png'
import ProductService from '../../services/ProductService'
import { ProductType } from 'types/ProductType.ts'
import SignIn from 'components/auth/SingIn'
import AuthService from 'services/auth.service.ts'
import UserPage from '../UserPage/UserPage'
import ProductDetail from '../ProductPage/ProductPage'

const { Header } = Layout

interface HeaderProps {
	onChangeContent: (content: React.ReactNode) => void
}

interface ProductData {
	id: string
	name: string
	category: string
	photoURL: string
}

const MyHeader: React.FC<HeaderProps> = ({ onChangeContent }) => {
	const [data, setData] = useState<ProductType[] | null>(null)
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [filteredData, setFilteredData] = useState<ProductData[] | null>(null)
	const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false)

	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		try {
			const newData = await ProductService.getAllProductForMainPage(8)
			setData(newData)
		} catch (error) {
			console.error('Failed to fetch data', error)
		}
	}

	useEffect(() => {
		if (data) {
			const filteredProducts = data.filter(product =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase())
			)
			setFilteredData(filteredProducts)
		}
	}, [data, searchQuery])

	const handleAvatarClick = async () => {
		if (await AuthService.isValidToken()) {
			return onChangeContent(<UserPage />)
		}
		setIsSignUpVisible(true)
	}

	const handleModalClose = () => {
		setIsSignUpVisible(false)
	}

	const handleSelect = (value: string) => {
		const product = filteredData?.find(p => p.name === value)
		if (product) {
			onChangeContent(
				<ProductDetail id={product.id} onChangeContent={onChangeContent} />
			)
			setSearchQuery('') // Очистити поле пошуку
		}
	}

	const handleSearch = (value: string) => {
		setSearchQuery(value)
	}

	const options =
		filteredData?.map(product => ({
			value: product.name,
			label: (
				<div className='product-window-li'>
					<img
						src={product.photoURL}
						className='product-photo'
						alt={product.name}
					/>
					{product.name}
				</div>
			)
		})) || []

	return (
		<Header className='header'>
			<div className='header-left'>
				<img src={logo} alt='Logo' className='logo' />
			</div>
			<div className='header-middle'>
				<AutoComplete
					options={options}
					onSelect={handleSelect}
					onSearch={handleSearch}
					placeholder='Пошук...'
					style={{ width: 600 }}
					value={searchQuery}
					onChange={setSearchQuery}
				/>
			</div>
			<div className='header-right'>
				<Badge className='cart-badge'>
					<a
						onClick={() =>
							notification.info({
								message: 'Функціонал в розробці',
								placement: 'topRight'
							})
						}
					>
						<ShoppingCartOutlined style={{ fontSize: '24px' }} />
					</a>
				</Badge>
				<Avatar
					size='large'
					icon={<UserOutlined />}
					className='user-avatar'
					onClick={handleAvatarClick}
				/>
			</div>

			{/* SignUp Modal */}
			<Modal
				visible={isSignUpVisible}
				onCancel={handleModalClose}
				footer={null}
			>
				<SignIn onClose={handleModalClose} />
			</Modal>
		</Header>
	)
}

export default MyHeader
