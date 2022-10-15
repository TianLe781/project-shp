import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'
//home的模块小仓库
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const actions = {
    //获取三级目录的请求数据
    categoryList(context) {
        //也可以用async,awiat
        reqCategoryList().then((value) => {
            context.commit('CATEGORYLIST', value.data)
        }, (error) => {
            console.log(error);
        });
    },
    //获取模拟banner的请求数据
    bannerList(context) {
        reqBannerList().then((value) => {
            context.commit('BANNERLIST', value.data)
        }, (error) => {
            console.log(error);
        });
    },
    //获取模拟floor的请求数据
    floorList(context) {
        reqFloorList().then((value) => {
            context.commit('FLOORLIST', value.data)
        }, (error) => {
            console.log(error);
        })
    }
};
const mutations = {
    //三级分类菜单数据写入
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    //mock模拟banner数据的写入
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    //mock模拟floorList数据的写入
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
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