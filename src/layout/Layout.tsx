import { ReactNode } from 'react'
import Header from 'layout/header/Header.tsx'
import Sidebar from 'components/sidebar/Sidebar.tsx'
import useWindowSize from 'hooks/useWindowSize.ts'
import MobileBottomMenu from 'components/mobile-bottom-menu/MobileBottomMenu.tsx'

function Layout({ children }: { children: ReactNode }) {
	const { width } = useWindowSize()

	const isTablet = width ? width <= 992 : false
	const isMobile = width ? width <= 768 : false

	return (
		<main>
			<Header />
			<div className='flex pt-20 gap-2 max-md:pt-16'>
				{!isTablet && <Sidebar />}
				<div className='pl-64 w-full max-md:pl-0'>{children}</div>
			</div>
			{isMobile && <MobileBottomMenu />}
		</main>
	)
}

export default Layout
