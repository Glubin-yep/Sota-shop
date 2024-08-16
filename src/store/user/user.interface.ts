export interface IUserState {
	email: string
	firstName: string
	lastName: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}
