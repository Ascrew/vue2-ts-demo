<!--
 * @Date: 2024-11-11 20:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: src/views/TableTest/components/SonTable/components/GrandSonTable/index.vue
-->
<template>
  <main class="grand-son-table">
    <el-table :data="data" style="width: 100%">
      <el-table-column
        prop="prop"
        label="label"
        width="width"
      ></el-table-column>
      <el-table-column prop="first"></el-table-column>
    </el-table>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'GrandSonTable'
})
export default class extends Vue {
  private data: any[] = [
    {
      first: '这是孙子组件这是孙子组件这是孙子组件这是孙子组件这是孙子组件'
    }
  ];
}
</script>
<style lang="stylus" scoped></style>
