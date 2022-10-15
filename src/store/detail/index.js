import { reqGoodsInfo, reqShopCar } from '@/api/index'

import { getUUID } from '../shopcart/uuid'

const state = {
    goodsInfo: {},
    categoryView: {},
    skuInfo: {},
    spuSaleAttrList: [],
    uuid_token: getUUID(),
};
const actions = {
    getGoodsInfo(context, skuId) {
        reqGoodsInfo(skuId).then((value) => {
            context.commit('GETGOODSINFO', value.data)
        }, (error) => {
            console.log(error);
        })
    },
    async addOrUpdetaShopCar(context, { skuId, skuNum }) {
        let result = await reqShopCar(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    }
};
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || [];
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}