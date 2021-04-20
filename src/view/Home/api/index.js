import service from '@/common/http'

export function modules () {
	return service({
		url: '/api/modules',
		method: 'get'
	})
}

export function botconfig () {
	return service({
		url: '/api/botconfig',
		method: 'get'
	})
}
