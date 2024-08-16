import { ReactNode } from 'react'
import Header from 'layout/header/Header.tsx'

function Layout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Header />
			<div className='pt-16'>{children}</div>
		</main>
	)
}

export default Layout
