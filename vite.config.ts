import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			api: '/src/api',
			assets: '/src/assets',
			components: '/src/components',
			config: '/src/config',
			constants: '/src/constants',
			hooks: '/src/hooks',
			layout: '/src/layout',
			pages: '/src/pages',
			services: '/src/services',
			store: '/src/store',
			types: '/src/types',
			utils: '/src/utils'
		}
	}
})
