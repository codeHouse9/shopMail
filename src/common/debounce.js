export default function debounce(fn, delay=50) {
	let timer = null
	return function() {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn()
		}, delay)
	}
}
