<!--
 * @Date: 2024-11-11 20:07:55
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: src/views/TableTest/SonTable/index.vue
-->
<template>
  <main class="son-table">
    <el-table :data="data" style="width: 100%" class="test-table">
      <el-table-column
        prop="prop"
        label="label"
        width="width"
      ></el-table-column>
      <el-table-column prop="first"></el-table-column>
    </el-table>
    <div>------------------------------------------------</div>

    <GrandSonTable></GrandSonTable>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GrandSonTable from './components/GrandSonTable/index.vue';

@Component({
  name: 'SonTable',
  components: {
    GrandSonTable
  }
})
export default class extends Vue {
  private data: any[] = [
    {
      first: '这是子组件这是子组件这是子组件'
    }
  ];
}
</script>
<style lang="stylus" scoped></style>
