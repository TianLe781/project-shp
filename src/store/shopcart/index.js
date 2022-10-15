import { reqShopCartList, reqDelectCart, reqCartChecked } from '@/api/index'
const state = {
    cartInfoData: {},
}
const actions = {
    async getShopcart(context, cartList) {
        let result = await reqShopCartList();
        if (result.code == 200) {
            context.commit('GETCARTLIST', result.data)
        }
    },
    async delectCartById(context, skuId) {
        let result = await reqDelectCart(skuId);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async changeCartCheck(context, { skuId, isChecked }) {
        let result = await reqCartChecked(skuId, isChecked)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    deleteAllChecked(context) {
        //准备一个PromiseAll的数组
        let promiseAll = [];
        //遍历所有cart，每一个都调用delectCartById返回一个promise
        context.getters.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? context.dispatch('delectCartById', item.skuId) : ''
                //把所有promise扔进Promise数组
            promiseAll.push(promise);
        });
        //将promise数组传入promiseall进行统一处理只要一个为false返回false
        return Promise.all(promiseAll);
    },
    checkeAllCart(context, isChecked) {
        let promiseAll = [];
        context.getters.cartInfoList.forEach(item => {
            let promise = context.dispatch('changeCartCheck', { skuId: item.skuId, isChecked });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll)
    }
};
const mutations = {
    GETCARTLIST(state, cartInfoData) {
        state.cartInfoData = cartInfoData[0] || {}; //md这个小地方卡了我一晚上
    }
};
const getters = {
    cartInfoList(state) {
        return state.cartInfoData.cartInfoList || []
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}