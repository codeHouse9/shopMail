import {ADD_COUNTER, ADD_TO_CART} from './const-type.js'
export default {
	[ADD_COUNTER](state, playload) {
		playload.count += 1;
	},
	[ADD_TO_CART](state, playload) {
		playload.checked = true
		playload.isDisabled = true
		state.cartList.push(playload);
	}
}
