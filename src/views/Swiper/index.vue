<!--
 * @Author: zhangyu
 * @Date: 2023-12-15 10:34:39
 * @LastEditors: Please set LastEditors
 * @Description: 轮播图
 * @FilePath: src/views/Swiper/index.vue
-->
<template>
  <main class="zy-swiper">
    <swiper ref="mySwiper" class="swiper" :options="options">
      <swiper-slide><div class="box">1</div></swiper-slide>
      <swiper-slide><div class="box">2</div></swiper-slide>
      <swiper-slide><div class="box">3</div></swiper-slide>
      <swiper-slide><div class="box">4</div></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <el-button class="swiper-button-prev" slot="button-prev"></el-button>
    <el-button class="swiper-button-next" slot="button-next"></el-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'ZySwiper',
})
export default class extends Vue {
  public options = {
    slidesPerView: 3,
    spaceBetween: 15,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    observer: true,
  };

  created() {
    let api = this.test('a');
    api.then((res) => {
      console.log('api: ', res);
    });
    // this.test().then((res) => {
    //   console.log(res);
    // });
  }
  public test(value: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('value: ', value);
        resolve(value);
      }, 2000);
    });
  }
}
</script>
<style lang="stylus" scoped>
.zy-swiper {
  width: 80%;
  padding: 50px;
}
.swiper-slide {
  width: 322px !important;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  // padding 43px 0 20px
  // margin-bottom 50px
  // img
  // transition all 0.6s
  // &:hover
  // transform scale(1.1)
  .box {
    height: 100%;
    width: 100%;
    border: 1px solid red;
  }
}
</style>
