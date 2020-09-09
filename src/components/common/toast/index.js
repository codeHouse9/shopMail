import Toast from './Toast.vue'
const obj = {}
obj.install = Vue => {
	//1. 创建组件构造器
	const toastComp = Vue.extend(Toast);
	const toast = new toastComp()
	//2挂载到某个元素上
	toast.$mount(document.createElement('div'))
	//3 放到body上
	document.body.appendChild(toast.$el)
	Vue.prototype.$toast = toast
}
export default obj