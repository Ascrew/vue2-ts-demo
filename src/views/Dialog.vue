<!--
 * @Author: zhangyu
 * @Date: 2023-03-28 14:54:47
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: src/views/Dialog.vue
-->
<template>
  <main class="">
    <div class="aa">asdklfjlas;djf;lasdf</div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: '',
})
export default class extends Vue {
  mounted() {
    console.log('mounted')
  }
  created() {
    console.log('created')
  }

  @Prop({ type: Object, default: () => ({}) })
  row!: any

  @Watch('row', { immediate: true })
  onRowChange(newVal: any) {
    console.log('newVal', newVal)
  }
}
</script>
<style lang="stylus" scoped></style>
