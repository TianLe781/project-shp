//search的模块小仓库
import { reqSearchList } from "@/api";

const state = {
    searchList: {},
};
const actions = {
    //发送searchList请求
    searchList(context, value) {
        reqSearchList(value).then((value) => {
            context.commit('SEARCHLIST', value.data)
        }, (error) => {
            console.log(error)
        })
    }
};
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList;
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