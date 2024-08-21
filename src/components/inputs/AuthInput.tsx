import { TAuthForm } from 'types/auth.types.ts'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { convertName } from 'utils/convert-name.ts'
import cn from 'clsx'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import styles from './Inputs.module.scss'

interface IInput {
	formRegister: UseFormRegister<TAuthForm>
	errors: FieldErrors<TAuthForm>
	title: 'email' | 'password'
	validationRules?: RegisterOptions<TAuthForm, 'email' | 'password'>
	type?: 'email' | 'text' | 'password'
}

interface IPasswordIcons {
	inputType?: 'email' | 'text' | 'password'
	setInputType: (inputType: 'email' | 'text' | 'password') => void
}

function AuthInput({
	formRegister,
	errors,
	title,
	validationRules,
	type
}: IInput) {
	let ukrTitle: 'email' | 'password' | 'пароль' = title
	if (ukrTitle === 'password') ukrTitle = 'пароль'

	const inputTitle = convertName(ukrTitle)
	const errorMessage = errors[title]?.message
	const [inputType, setInputType] = useState(type)

	return (
		<div className={styles.input}>
			<label
				htmlFor={`form-${title.toLowerCase()}`}
				className={cn({
					[styles.labelError]: !!errorMessage
				})}
			>
				{inputTitle}
			</label>
			<input
				id={`form-${title.toLowerCase()}`}
				type={inputType}
				{...formRegister(title, {
					...validationRules
				})}
				placeholder={inputTitle}
				className={cn(styles.inputField, {
					[styles.error]: !!errorMessage,
					[styles.passwordPadding]: type === 'password'
				})}
			/>
			{type === 'password' && (
				<PasswordIcons inputType={inputType} setInputType={setInputType} />
			)}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	)
}

export default AuthInput

const PasswordIcons = ({
	inputType = 'password',
	setInputType
}: IPasswordIcons) => {
	return (
		<div className='absolute right-4 top-4'>
			{inputType === 'password' ? (
				<HiOutlineEye size={20} onClick={() => setInputType('text')} />
			) : (
				<HiOutlineEyeOff size={20} onClick={() => setInputType('password')} />
			)}
		</div>
	)
}
