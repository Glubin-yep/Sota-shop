const colors = {
	text: 'var(--app-text)',
	'bg-color': 'var(--app-background)',
	'header-background': 'var(--header-background)',
	'button-bg': 'var(--button-background)',
	'button-text': 'var(--button-text)'
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {}
	},
	plugins: []
}
