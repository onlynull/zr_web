import service from './http'

export function login (params) {
	return service({
		url: '/api/login',
		method: 'get',
		params
	})
}

export function islogin () {
	return service({
		url: '/api/islogin',
		method: 'get'
	})
}
