<!--
 * @Author: zhangyu
 * @Date: 2023-08-09 11:43:49
 * @LastEditors: Please set LastEditors
 * @Description: 拖拽布局组件
 * @FilePath: src/views/GridLayout/index.vue
-->
<template>
  <main class="grid-layout">
    <Detail></Detail>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Detail from './detail/index.vue'
@Component({
  name: 'GridLayoutDemo',
  components: {
    Detail,
  },
})
export default class extends Vue {}
</script>
<style lang="stylus" scoped></style>
