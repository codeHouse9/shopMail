import {ADD_COUNTER, ADD_TO_CART, ADD_CART_LIST} from './const-type.js'
export default {
	[ADD_CART_LIST](context, playload) {
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find(item => item.iid === playload.iid)
			if (oldProduct) {
				context.commit(ADD_COUNTER, oldProduct)
				resolve('当前商品数量+1')
			} else {
				playload.count = 1;
				context.commit(ADD_TO_CART, playload)
				resolve('商品添加成功')
			}
		})
	}
}
