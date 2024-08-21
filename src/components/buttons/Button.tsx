import cn from 'clsx'
import { ReactNode } from 'react'

interface IButton {
	type: 'button' | 'submit' | 'reset'
	size?: 'small' | 'medium' | 'default' | 'large'
	variant?: 'light'
	onClick?: () => void
	className?: string
	disabled?: boolean
	children: ReactNode
}

function Button({
	type,
	size = 'default',
	variant,
	onClick,
	className,
	disabled = false,
	children
}: IButton) {
	return (
		<button
			type={type}
			className={cn(
				'button',
				{
					'button-small': size === 'small',
					'button-medium': size === 'medium',
					'button-large': size === 'large',
					light: variant === 'light'
				},
				className
			)}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
