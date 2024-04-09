<!--
 * @Author: zhangyu
 * @Date: 2024-01-05 14:39:31
 * @LastEditors: Please set LastEditors
 * @Description: el popover test
 * @FilePath: src/views/Popover/index.vue
-->
<template>
  <main class="popover">
    <el-popover
      popper-class="popover__init--corp"
      placement="bottom-start"
      width="200"
      trigger="hover"
      :append-to-body="false"
      :popper-options="{
        boundariesElement: 'body',
        gpuAcceleration: true,
        positionFixed: true,
        preventOverflow: true
      }"
    >
      <el-input
        v-model="filterText"
        placeholder="请输入搜索的单位名称"
      ></el-input>
      <span slot="reference" class="operator--list--name">
        <span>{{ 'test' }}</span>
      </span>
    </el-popover>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Popover'
})
export default class extends Vue {
  public filterText = '';
}
</script>
<style lang="stylus" scoped></style>
