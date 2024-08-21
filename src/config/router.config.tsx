import { createBrowserRouter } from 'react-router-dom'
import HomePage from 'pages/HomePage.tsx'
import Layout from 'layout/Layout.tsx'
import About from 'pages/About.tsx'
import Contacts from 'pages/Contacts.tsx'
import Service from 'pages/Service.tsx'
import ProductPage from 'components/products/product-page/ProductPage.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<HomePage />
			</Layout>
		)
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
