const colors = {
	black: 'var(--black)',
	white: 'var(--white)',
	text: 'var(--app-text)',
	'bg-color': 'var(--app-background)',
	'header-background': 'var(--header-background)',
	'button-hover-light': 'var(--button-hover-light)',
	'button-hover-dark': 'var(--button-hover-dark)',
	error: 'var(--error)',
	gray: 'var(--gray)',
	placeholder: 'var(--placeholder)',
	subcolor: 'var(--subcolor)',
	'light-gray': 'var(--light-gray)'
}

const screens = {
	'max-xs': { max: '480px' },
	'max-sm': { max: '768px' },
	'max-md': { max: '992px' },
	'max-lg': { max: '1200px' },
	'max-xl': { max: '1399px' },
	'max-2xl': { max: '1920px' }
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		screens,
		extend: {
			keyframes: {
				slideDown: {
					'0%': { transform: 'translateY(-25%)' },
					'100%': { transform: 'translateY(0)' }
				}
			},
			animation: {
				slideDown: 'slideDown 0.4s ease-out'
			}
		}
	},
	plugins: []
}
