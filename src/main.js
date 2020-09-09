import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastclick from 'fastclick'
//import VueLazyLoad from 'vue-lazyLoad'
Vue.config.productionTip = false

Vue.use(toast); //组件封装2,添加到Vue，默认会执行toast里面的install方法，默认会把Vue传递过去
//添加事件总线
Vue.prototype.$bus = new Vue();
//解决移动端300ms延迟时间 fastclick
fastclick.attach(document.body)
//图片懒加载 vue-lazyload 把 :src修改为v-lazy
/* Vue.use(VueLazyLoad, {
	//loading: require('./assets/img/common/angel.gif'),
	throttleWait: 50, //设置等待时间
	dispatchEvent: true ,//vue-lazyload默认会阻塞图片的load事件，若要打开dispatchEvent设置为true
	//preLoad: 2, //提前加载高度
	// listenEvents: ['scroll','touchmove']
	
}); */
new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
