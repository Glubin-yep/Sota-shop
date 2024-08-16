import React, { useState, useEffect } from 'react'
import {
	Card,
	List,
	Typography,
	Avatar,
	Badge,
	Button,
	Divider,
	notification
} from 'antd'
import { EditOutlined, LogoutOutlined } from '@ant-design/icons'
import './UserPage.css'
import UserService from '../../services/UserService'
import ProductService from '../../services/ProductService'
import { UserInfoType } from '../../types/UserInfoType'
import LoadingScreen from '../Loader/Loader'
import { ProductDetails } from '../../types/ProductDetails'
import moment from 'moment'
import AuthService from 'services/auth.service.ts'

const { Title, Text } = Typography

const PersonalCabinet: React.FC = () => {
	const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
	const [productData, setProductData] = useState<
		Record<string, ProductDetails>
	>({})
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			try {
				const response = await UserService.getUserInfo()
				setUserInfo(response)

				if (response.delivery) {
					// Fetch product data
					const productPromises = response.delivery.map(pkg =>
						ProductService.getProductByID(pkg.productId).then(product => ({
							productId: pkg.productId,
							product
						}))
					)
					const products = await Promise.all(productPromises)
					const productMap = products.reduce(
						(acc, { productId, product }) => {
							acc[productId] = product
							return acc
						},
						{} as Record<string, ProductDetails>
					)
					setProductData(productMap)
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	const handleEditProfile = () => {
		notification.info({
			message: 'Функціонал в розробці',
			placement: 'topRight'
		})

		console.log('Edit profile clicked')
	}

	const handleLogout = async () => {
		// Логіка розлогінювання
		if (await AuthService.logout()) {
			return (window.location.href = '/')
		}
		console.log('Logout clicked')
	}

	return (
		<div className='personal-cabinet-container'>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<Card className='personal-cabinet-card'>
						<div className='personal-cabinet-avatar'>
							<Avatar src='https://avatar.iran.liara.run/public' size={100} />
							<div className='personal-cabinet-info'>
								<Title level={3}>
									{userInfo?.firstName} {userInfo?.lastName}
								</Title>
								<Text strong>Email: </Text>
								<Text>{userInfo?.email}</Text>
								<br />
								<Title level={5}>Адреса для доставки</Title>
								<Text>{userInfo?.address}</Text>
							</div>
						</div>
						<Divider />
						<div className='personal-cabinet-buttons'>
							<Button
								type='primary'
								icon={<EditOutlined />}
								style={{ marginRight: '10px' }}
								onClick={handleEditProfile}
							>
								Редагувати профіль
							</Button>
							<Button
								type='default'
								icon={<LogoutOutlined />}
								onClick={handleLogout}
							>
								Розлогінитися
							</Button>
						</div>
					</Card>

					<Card title='Статус посилок' className='personal-cabinet-list'>
						<List
							dataSource={userInfo?.delivery || []}
							renderItem={pkg => (
								<List.Item key={pkg.id}>
									<List.Item.Meta
										title={`Трекінг номер: ${pkg.trackCode}`}
										description={`Орієнтовна дата доставки: ${moment(
											pkg.createdOn
										).format('DD-MM-YYYY HH:mm')}`}
									/>
									<Badge
										status={
											pkg.status === 'Доставлено'
												? 'success'
												: pkg.status === 'В обробці'
													? 'processing'
													: 'error'
										}
										text={pkg.status}
									/>
								</List.Item>
							)}
						/>
					</Card>

					<Card title='Історія покупок' className='personal-cabinet-list'>
						<List
							dataSource={userInfo?.delivery || []}
							renderItem={order => {
								const product = productData[order.productId]
								return (
									<List.Item key={order.id}>
										<List.Item.Meta
											title={product ? product.name : 'Завантаження...'}
											description={`Дата: ${moment(order.createdOn).format(
												'DD-MM-YYYY HH:mm'
											)}`}
										/>
										<Badge
											status={
												order.status === 'Доставлено'
													? 'success'
													: order.status === 'В обробці'
														? 'processing'
														: 'error'
											}
											text={order.status}
										/>
									</List.Item>
								)
							}}
						/>
					</Card>
				</>
			)}
		</div>
	)
}

export default PersonalCabinet
