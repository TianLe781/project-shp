import Vue from 'vue';
import VueRouter from 'vue-router'
//引入store
import store from '@/store'
//使用插件
Vue.use(VueRouter);

//解决编程式组件重复点击时出现的报错
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resovle, reject) {
    if (resovle && reject) {
        originPush.call(this, location, resovle, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
};
// 重写replace
VueRouter.prototype.replace = function(location, resovle, reject) {
    if (resovle && reject) {
        originReplace.call(this, location, resovle, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
};
//引入路由
import routes from './routes';


let router = new VueRouter({
    //打包上线后的根路径
    base: '/dist',
    routes,
    //设置默认滚动条为0
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
});
//路由守卫
router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo
    if (token) {
        //如果登陆了
        if (to.path == '/login') {
            //如果想去login
            next('/');
        } else {
            //去其他页面
            if (name) {
                //有用户信息
                next()
            } else {
                //token过期了，没有用户信息
                try {
                    //获取用户信息成功
                    await store.dispatch('user/getUserInfo')
                    next()
                } catch (error) {
                    //用户token过期，服务器返回不了用户信息，需要用户重新登录
                    await store.dispatch('user/userLoginOut')
                    next('/login')
                }
            }
            next()
        }
    } else {
        //未登录
        if (to.path.indexOf('/center') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/shopcart') != -1) {
            //携带用户所点击的路由信息给登录页
            next('login?record=' + to.path)
        }
        next()
    }
});
//对外暴露路由实例
export default router;