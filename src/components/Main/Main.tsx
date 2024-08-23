import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import ShopPage from '../ShopPage/ShopPage'
import './Main.module.scss'
const { Content: AntContent } = Layout

const Main: React.FC = () => {
	const [activeContent, setActiveContent] = useState<React.ReactNode>()

	useEffect(() => {
		setActiveContent(<ShopPage onChangeContent={setActiveContent} />)
	}, [])

	return <AntContent className='content'>{activeContent}</AntContent>
}

export default Main
