import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from 'services/auth.service'
import { TAuthForm, TAuthResponse } from 'types/auth.types'
import { removeFromStorage } from 'services/auth-token.service.ts'

export const register = createAsyncThunk<TAuthResponse, TAuthForm>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await authService.main('register', data)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<TAuthResponse, TAuthForm>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await authService.main('login', data)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await removeFromStorage()
})

// export const checkAuth = createAsyncThunk<TAuthResponse | null>(
// 	'auth/check-auth',
// 	async (_, thunkApi) => {
// 		try {
// 			const user = await authService.getCurrentUser()
// 			if (!user) {
// 				return thunkApi.rejectWithValue('No user found')
// 			}
//
// 			const isValid = await authService.isValidToken()
// 			if (!isValid) {
// 				thunkApi.dispatch(logout())
// 				return thunkApi.rejectWithValue('Invalid token')
// 			}
//
// 			return user
// 		} catch (error: unknown) {
// 			console.log(error)
// 			return thunkApi.rejectWithValue('Failed to check auth')
// 		}
// 	}
// )
