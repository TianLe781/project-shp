import { reqUserAddress, reqOrderList } from '@/api'

const state = {
    userAddress: [],
    orderData: {},
};
const actions = {
    async getUserAddress(context) {
        let result = await reqUserAddress()
        if (result.code == 200) {
            context.commit('GETUSERADDRESS', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getOrderList(context) {
        let result = await reqOrderList()
        if (result.code == 200) {
            context.commit('GETOREDERLIST', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const mutations = {
    GETUSERADDRESS(state, userAddress) {
        state.userAddress = userAddress;
    },
    GETOREDERLIST(state, orderData) {
        state.orderData = orderData;
    }
};
const getters = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}