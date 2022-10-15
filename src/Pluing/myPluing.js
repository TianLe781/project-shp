const myPluing = {};
//必须要注入install属性
myPluing.install = function(Vue, options) {
    //自定义全局指令 
    Vue.directive(options.name, (element, params) => {
        element.innerText = params.value.toUpperCase();
    })
}

export default myPluing;