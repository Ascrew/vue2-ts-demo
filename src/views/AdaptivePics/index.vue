<!--
 * @Author: zhangyu
 * @Date: 2023-06-16 10:08:40
 * @LastEditors: Please set LastEditors
 * @Description: 自适应缩放比例的图片列表 每行会根据屏幕宽度显示适当的数量
 * @FilePath: src/views/AdaptivePics/index.vue
-->
<template>
  <main class="adaptive-pics">
    <nav class="header"></nav>
    <section class="content">
      <div class="pic" v-for="(pic, index) in picList" :key="index">
        <div class="pic--wrapper">
          <img class="pic--img" :src="pic.url" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'AdaptivePics',
})
export default class extends Vue {
  private picList: any = [
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
    {
      url: 'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg',
    },
  ]
}
</script>
<style lang="stylus" scoped>
.adaptive-pics
  height 100%
  padding 0 100px
  .header
    height 100px
    border 1px solid red
    margin-bottom 100px
  .content
    padding 20px
    border 1px solid blue
    overflow hidden
    display flex
    flex-wrap wrap
    .pic
      margin 10px
      .pic--wrapper
        position relative
        &:after
          content ''
          display block
          padding-top 200%
        .pic--img
          position absolute
          width 100%
          height 100%
          left 0
          top 0
          right 0
          bottom 0
  @media screen and (max-width 599.9px)
    .pic
      width calc(100% / 2 - 20px)
  @media screen and (min-width 600px) and (max-width 959.9px)
    .pic
      width calc(100% / 3 - 20px)
  @media screen and (min-width 960px) and (max-width 1199.9px)
    .pic
      width calc(100% / 4 - 20px)
  @media screen and (min-width 1200px) and (max-width 1365.9px)
    .pic
      width calc(100% / 5 - 20px)
  @media screen and (min-width 1366px) and (max-width 1679.9px)
    .pic
      width calc(100% / 6 - 20px)
  @media screen and (min-width 1680px)
    .pic
      width calc(100% / 7 - 20px)
</style>
