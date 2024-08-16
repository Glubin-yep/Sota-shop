import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from 'store/user/user.slice'

const combinedReducers = combineReducers({
	user: userSlice.reducer
})

export const store = configureStore({
	reducer: combinedReducers
})

export type TypeRootState = ReturnType<typeof combinedReducers>
