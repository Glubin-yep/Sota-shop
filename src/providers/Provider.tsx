import { RouterProvider } from 'react-router-dom'
import { router } from 'config/router.config.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store.ts'

const queryClient = new QueryClient()

export const Providers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
	)
}
