import { createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home.tsx'
import Layout from 'layout/Layout.tsx'
import AuthPage from 'pages/Auth.tsx'

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
		path: '/auth',
		element: <AuthPage />
	}
])
