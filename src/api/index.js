import requests from './ajax';

//引入mockAjax
import mockRequests from './mockAjax'

//三级分类接口，返回值为promise
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//mock模拟的banners请求
export const reqBannerList = () => mockRequests({ url: '/banners', method: 'get' });
//mock模拟的floor请求
export const reqFloorList = () => mockRequests({ url: '/floors', method: 'get' });
//search的请求
export const reqSearchList = (params = {}) => requests({ url: '/list', method: 'post', data: params })
    //detail的请求
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
//购物车请求
export const reqShopCar = (skuId, skuNum) => requests({ url: `/cart/addToCart/${ skuId }/${ skuNum }`, method: 'post' });
//购物车列表
export const reqShopCartList = () => requests({ url: `/cart/cartList`, method: 'get' });
//删除购物车
export const reqDelectCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });
//商品选中状态
export const reqCartChecked = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
    //发送验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
    //注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })
    //登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })
    //token校验
export const regetUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
    //退出登录接口
export const reqUserLoginOut = () => requests({ url: '/user/passport/logout', method: 'get' })
    //获取用户地址信息
export const reqUserAddress = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
//获取订单列表
export const reqOrderList = () => requests({ url: '/order/auth/trade', method: 'get' })
    //提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })
    //返回订单支付信息
export const reqOrderPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
    //支付进度信息
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });
//获取我的订单列表
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });