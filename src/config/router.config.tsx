import { createBrowserRouter } from 'react-router-dom'
import HomePage from 'pages/HomePage.tsx'
import Layout from 'layout/Layout.tsx'
import About from 'pages/About.tsx'
import Contacts from 'pages/Contacts.tsx'
import Service from 'pages/Service.tsx'
import ProductPage from 'components/products/product-page/ProductPage.tsx'
import Sidebar from 'components/sidebar/Sidebar.tsx'
import CategoryPage from 'components/CategoryPage/CategoryPage.tsx'
import Error404 from 'components/ErrorPages/Error404/Error404.tsx'
import UserPage from 'components/UserPage/UserPage.tsx'
import Cart from 'components/cart/Cart.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<HomePage />
			</Layout>
		),
		errorElement: <Error404 />
	},
	{
		path: '/product/:id',
		element: (
			<Layout>
				<ProductPage />
			</Layout>
		)
	},
	{
		path: '/category/:category',
		element: (
			<Layout>
				<CategoryPage />
			</Layout>
		)
	},
	{
		path: '/cart',
		element: (
			<Layout>
				<Cart />
			</Layout>
		)
	},
	{
		path: '/catalog',
		element: (
			<Layout>
				<Sidebar />
			</Layout>
		)
	},
	{
		path: '/profile',
		element: (
			<Layout>
				<UserPage />
			</Layout>
		)
	},
	{
		path: '/about',
		element: (
			<Layout>
				<About />
			</Layout>
		)
	},
	{
		path: '/contacts',
		element: (
			<Layout>
				<Contacts />
			</Layout>
		)
	},
	{
		path: '/service',
		element: (
			<Layout>
				<Service />
			</Layout>
		)
	}
])
