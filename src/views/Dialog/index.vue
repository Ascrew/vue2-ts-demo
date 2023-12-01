<!--
 * @Author: zhangyu
 * @Date: 2023-12-01 17:03:19
 * @LastEditors: Please set LastEditors
 * @Description: 弹窗
 * @FilePath: src/views/Dialog/index.vue
-->
<template>
  <main class="zy-dialog">
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
    <dialog :visible.sync="dialogVisible"></dialog>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dialog from './components/dialog/index.vue'
@Component({
  name: 'ZyDialog',
  components: {
    Dialog,
  },
})
export default class extends Vue {
  public dialogVisible = false
  public openDialog() {
    this.dialogVisible = true
  }
}
</script>
<style lang="stylus" scoped>
.zy-dialog {
  padding: 20px;
  .zy-dialog__div {
    padding: 20px;
  }
}
</style>
