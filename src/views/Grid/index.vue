<!--
 * @Author: zhangyu
 * @Date: 2023-05-05 10:20:00
 * @LastEditors: Please set LastEditors
 * @Description: 练习 grid 布局
 * @FilePath: src/views/Grid.vue
-->
<template>
  <main class="grid">
    <section class="top">
      <div class="box__wrapper" v-for="(item, index) in list" :key="index">
        <div class="box__title">{{ item.title }}</div>
        <div class="box__num">{{ item.num }}</div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Grid',
})
export default class extends Vue {
  public list: any[] = [
    {
      title: '1',
      num: '10000',
    },
    {
      title: '1',
      num: '10000',
    },
    {
      title: '1',
      num: '10000',
    },
    {
      title: '1',
      num: '10000',
    },
  ]
}
</script>
<style lang="stylus" scoped>
.grid
  .top
    display grid
    grid-auto-flow column
    .box__wrapper
      border 1px solid #ccc
</style>
