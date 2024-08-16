import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Global.scss'
import { Providers } from './providers/Provider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers />
	</StrictMode>
)
