//引入路由组件

//路由懒加载
// const foo = ()=> import('@/pages/Home') 返回的是一个Promise对象,路由component里直接写foo，简写直接component后直接写 ()=> import('@/pages/Home')

// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOreder from '@/pages/Center/groupOreder'

export default [{
        path: '/center',
        component: Center,
        meta: { show: true },
        //二级路由
        children: [{
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOreder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    }, {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true },
    }, {
        path: '/pay',
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            } else {
                next(false)
            }
        },
    }, {
        path: '/trade',
        component: Trade,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            } else {
                next(false)
            }
        },
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    }, {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    }, {
        path: '/detail/:id',
        component: Detail,
        meta: { show: true }
    }, {
        path: '/home',
        component: () =>
            import ('@/pages/Home'),
        meta: { show: true }
    }, {
        name: 'search',
        //注意params可设置可选参数，设置方法为占位符后加个?
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }
    }, {
        path: '/login',
        component: Login,
        meta: { show: false }
    }, {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    //重新定向到home，访问/直接跳转home
    {
        path: '*',
        redirect: '/home'
    }
]