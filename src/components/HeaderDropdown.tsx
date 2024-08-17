import { MdOutlineLogout } from 'react-icons/md'

interface IHeaderDropdown {
	handleLogout: () => void
}

function HeaderDropdown({ handleLogout }: IHeaderDropdown) {
	return (
		<div>
			<h1 className='font-semibold px-3'>My Account</h1>
			<hr className='border-none h-0.5 bg-border rounded-full opacity-60 my-2 mx-3' />
			<div
				className='flex items-center gap-2 mt-2 p-2 px-4 cursor-pointer rounded-xl w-full hover:bg-light-gray'
				onClick={handleLogout}
			>
				<MdOutlineLogout size={23} />
				<h1 className='text-lg text-text font-semibold'>Вийти</h1>
			</div>
		</div>
	)
}

export default HeaderDropdown
