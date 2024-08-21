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
	const buttonTitle = type === 'login' ? 'Ввійти' : 'Зареєструватися'

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
						Ще не маєте профілю?{' '}
						<span onClick={handleChangeFormType}>Зареєструватися!</span>
					</p>
				) : (
					<p>
						Уже маєте профіль?{' '}
						<span onClick={handleChangeFormType}>Ввійти!</span>
					</p>
				)}
			</div>
		</div>
	)
}

export default AuthFormButtons
