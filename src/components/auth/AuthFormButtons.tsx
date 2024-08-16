import styles from './Auth.module.scss'
import Button from '../buttons/Button.tsx'
import { UseFormClearErrors } from 'react-hook-form'
import { TAuthForm } from 'types/auth.types.ts'

interface IAuthFormButtons {
	type: 'register' | 'login'
	setType: (type: 'register' | 'login') => void
	clearErrors: UseFormClearErrors<TAuthForm>
}

function AuthFormButtons({ type, setType, clearErrors }: IAuthFormButtons) {
	const buttonTitle = type === 'login' ? 'Login' : 'Register'

	const handleChangeFormType = () => {
		if (type === 'login') {
			setType('register')
		} else {
			setType('login')
		}
		clearErrors()
	}

	return (
		<div className={styles.footer}>
			<Button type='submit'>{buttonTitle}</Button>
			<div>
				{type === 'login' ? (
					<p>
						Don't have an account?{' '}
						<span onClick={handleChangeFormType}>Let's create it!</span>
					</p>
				) : (
					<p>
						Already have an account?{' '}
						<span onClick={handleChangeFormType}>Let's login!</span>
					</p>
				)}
			</div>
		</div>
	)
}

export default AuthFormButtons
