import service from './http'

export function login () {
	return service({
		url: '/login?token=www123',
		method: 'get'
	})
}

export function modules () {
	return service({
		url: '/api/modules',
		method: 'get'
	})
}
