<!--
 * @Author: zhangyu
 * @Date: 2023-12-01 17:10:30
 * @LastEditors: Please set LastEditors
 * @Description: 弹窗组件
 * @FilePath: src/views/Dialog/components/dialog/index.vue
-->
<template>
  <main class="dialog">
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose"
    >
      <div>
        <el-table :data="[]" style="width: 100%">
          <el-table-column
            prop="prop"
            label="label"
            width="width"
          ></el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Dialog',
})
export default class extends Vue {
  @Prop()
  public visible!: boolean

  public dialogVisible = false

  created() {
    console.log('created')
  }
  public dialogBeforeClose() {
    console.log('listen dialog before close')
  }
  public onConfirm() {
    console.log('listen on confirm')
  }
}
</script>
<style lang="stylus" scoped></style>
