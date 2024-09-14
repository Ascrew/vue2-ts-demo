<!--
 * @Date: 2024-05-27 13:44:15
 * @LastEditors: Please set LastEditors
 * @Description: element级联-单层搜索
 * @FilePath: src/views/CascaderSearch/index.vue
-->
<template>
  <main class="cascader-search">
    <el-cascader
      class="zy-cascader"
      :options="options"
      :props="props"
      v-model="value"
      filterable
    ></el-cascader>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
let id = 0;
@Component({
  name: ''
})
export default class extends Vue {
  private value = '';
  @Watch('value')
  onWatchValue(newVal: string) {
    console.log('listen new val', newVal);
  }
  private props = {
    lazy: true,
    lazyLoad(node: any, resolve: any) {
      const { level } = node;
      setTimeout(() => {
        const nodes = Array.from({ length: level + 2 }).map((item) => ({
          value: ++id,
          label: `选项${id}`,
          leaf: level >= 1
        }));
        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        resolve(nodes);
      }, 1000);
    }
  };
  private options: any = [];
}
</script>

<style lang="stylus" scoped></style>
