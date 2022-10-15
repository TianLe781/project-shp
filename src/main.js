import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
Vue.config.productionTip = false
    //引入elementUi
import { Button, MessageBox } from 'element-ui';
//全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination);
//elementUi Button
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//导入Vuex
import store from './store';

//引入mock
import '@/mock/mockServer'

//引入swiper样式
import 'swiper/css/swiper.css'

//所有API
import * as API from '@/api'

//导入懒加载插件
import VueLazyload from 'vue-lazyload'
//使用懒加载插件
const loadimage = require('./assets/images/1.gif')
Vue.use(VueLazyload, {
    loading: loadimage,
})

//自定义插件
import myPluing from "@/Pluing/myPluing";
Vue.use(myPluing, {
    name: 'upper'
});


new Vue({
    render: h => h(App),
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    router,
    store,
}).$mount('#app')