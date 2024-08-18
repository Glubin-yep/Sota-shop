import { createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home.tsx'
import Layout from 'layout/Layout.tsx'
import About from 'pages/About.tsx'
import Contacts from 'pages/Contacts.tsx'
import Service from 'pages/Service.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
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
