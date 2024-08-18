import { ReactNode } from 'react'
import Header from 'layout/header/Header.tsx'
import Sidebar from 'components/sidebar/Sidebar.tsx'

function Layout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Header />
			<div className='flex pt-20 gap-2'>
				<Sidebar />
				<div className='pl-80 w-full'>{children}</div>
			</div>
		</main>
	)
}

export default Layout
