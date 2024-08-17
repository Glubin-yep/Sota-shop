import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TAuthForm } from 'types/auth.types.ts'
import AuthInput from '../inputs/AuthInput.tsx'
import { validEmail } from 'utils/valid-email.ts'
import AuthFormButtons from './AuthFormButtons.tsx'
import styles from './Auth.module.scss'
import { useAuth } from 'hooks/useAuth.ts'
import { useActions } from 'hooks/useActions.ts'
import Loader from 'components/Loader/Loader.tsx'
import useOutsideClick from 'hooks/useOutsideFormClick.ts'

function Auth({ onClose }: { onClose: () => void }) {
	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors
	} = useForm<TAuthForm>({ mode: 'onSubmit' })

	const [type, setType] = useState<'login' | 'register'>('login')

	const onSubmit: SubmitHandler<TAuthForm> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	const closeAuthForm = useCallback(() => {
		onClose()
	}, [onClose])

	const ref = useOutsideClick(closeAuthForm)

	return (
		<section className={styles.auth}>
			{isLoading ? (
				<Loader />
			) : (
				<form
					ref={ref}
					onSubmit={handleSubmit(onSubmit)}
					className={styles.form}
				>
					<h1>{type === 'login' ? 'Welcome back!' : "Let's create account"}</h1>
					<div>
						<AuthInput
							formRegister={formRegister}
							errors={errors}
							title='email'
							validationRules={{
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email address'
								}
							}}
						/>
						<AuthInput
							formRegister={formRegister}
							errors={errors}
							title='password'
							validationRules={{
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password mush contain at least 6 characters'
								}
							}}
							type='password'
						/>
					</div>
					<AuthFormButtons
						type={type}
						setType={setType}
						clearErrors={clearErrors}
					/>
				</form>
			)}
		</section>
	)
}

export default Auth
