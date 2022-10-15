// 注册和登录都在这

import { reqGetCode, reqUserRegister, reqUserLogin, regetUserInfo, reqUserLoginOut } from '@/api';

const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: ''
};
const actions = {
    async getCode(context, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            context.commit('GETCODE', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister(context, data) {
        let result = await reqUserRegister(data)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));

        }
    },
    async userLogin(context, data) {
        let result = await reqUserLogin(data)
        if (result.code == 200) {
            context.commit('USERLOGIN', result.data.token);
            //持久存贮token
            localStorage.setItem('TOKEN', result.data.token)
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async getUserInfo(context) {
        let result = await regetUserInfo()
        if (result.code == 200) {
            context.commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            // return Promise.reject(new Error('faile'))
        }
    },
    async userLoginOut(context) {
        let result = await reqUserLoginOut();
        if (result.code = 200) {
            context.commit('CLEAR');
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = ''
        localStorage.removeItem('TOKEN')
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