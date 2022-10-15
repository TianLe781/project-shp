<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="index">
        <img :src="slide.imgUrl" :class="{active:slide.isDefault == 1}" @click="changeActive(slide,skuImageList,index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    props:{
      skuImageList:{
        default(){
          return [{}];
        }
      }
    },
    watch:{
      skuImageList(newValue,oldValue){
        this.$nextTick(()=>{
          //new swiper
          var mySwiper = new Swiper(".swiper-container", {
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //每页显示几张
            slidesPerView: 3,
            //每次滚动几张
            slidesPerGroup:1,
          });
        })
      }
    },
    methods:{
      //排他思想
      changeActive(slide,skuImageList,index){
        skuImageList.forEach(item => {
          item.isDefault = 0;
        });
        slide.isDefault = 1;
        //把索引传给兄弟组件
        this.$bus.$emit('getIndex',index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>