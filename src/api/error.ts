import { AxiosError } from 'axios'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

type ErrorResponse = {
	message?: string | string[]
}

export const errorCatch = (error: AxiosError): string => {
	const message =
		error?.response?.data &&
		typeof error.response.data === 'object' &&
		'message' in error.response.data
			? (error.response.data as ErrorResponse).message
			: null

	return message
		? Array.isArray(message)
			? message[0]
			: message
		: error.message
}
