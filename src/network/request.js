import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		timeout: 2000,
		baseURL: ''
	})
	instance.interceptors.request.use(config => {
		return config
	}, err => {
		return err
	})
	
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {
		return err
	})
	
	return instance(config)
}
