<template>
  <div>
    <!-- 测试自定义插件 -->
    <!-- <h1 v-upper="msg"></h1> -->
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- home search 显示 login register 不显示 -->
    <Footer v-show='$route.meta.show'></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  data(){
    return {
      msg:'abc'
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    //首次加载发送一次三级分类数据请求
    this.$store.dispatch("home/categoryList");
  }
};
</script>

<style>

</style>
