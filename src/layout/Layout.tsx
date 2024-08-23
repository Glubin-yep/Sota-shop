import { ReactNode } from 'react'
import Header from 'layout/header/Header.tsx'
import Sidebar from 'components/sidebar/Sidebar.tsx'
import useWindowSize from 'hooks/useWindowSize.ts'

function Layout({ children }: { children: ReactNode }) {
	const { width } = useWindowSize()

	const isMobile = width ? width <= 992 : false

	return (
		<main>
			<Header />
			<div className='flex pt-20 gap-2 max-md:pt-16'>
				{!isMobile && <Sidebar />}
				<div className='pl-64 w-full max-md:pl-0'>{children}</div>
			</div>
		</main>
	)
}

export default Layout
