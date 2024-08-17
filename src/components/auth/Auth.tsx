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
import { IoMdClose } from 'react-icons/io'

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
					<div className={styles.header}>
						<h1>{type === 'login' ? 'Вхід' : 'Реєстрація'}</h1>
						<IoMdClose
							onClick={onClose}
							className='cursor-pointer w-7 h-auto'
						/>
					</div>
					<div className={styles.inputs}>
						<AuthInput
							formRegister={formRegister}
							errors={errors}
							title='email'
							validationRules={{
								required: 'Необхідно ввести email',
								pattern: {
									value: validEmail,
									message: 'Перевірте правильність формату email'
								}
							}}
						/>
						<AuthInput
							formRegister={formRegister}
							errors={errors}
							title='password'
							validationRules={{
								required: 'Необхідно ввести пароль',
								minLength: {
									value: 6,
									message: 'Пароль повинен бути не менше 6 символів'
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
