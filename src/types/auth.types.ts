export type TAuthForm = {
	email: string
	password: string
}

export type TAuthResponse = {
	token: string
	id: number
	email: string
	firstName: string
	lastName: string
}
