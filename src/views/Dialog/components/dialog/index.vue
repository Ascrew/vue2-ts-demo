<!--
 * @Author: zhangyu
 * @Date: 2023-12-01 17:10:30
 * @LastEditors: Please set LastEditors
 * @Description: 弹窗组件
 * @FilePath: src/views/Dialog/components/dialog/index.vue
-->
<template>
  <main class="dialog">
    <el-dialog title="test" :visible.sync="dialogVisible" width="340px">
      <div class="dialog__wrapper">
        <div class="dialog__title">Title</div>
        <DynamicForm></DynamicForm>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DynamicForm from '../../../DynamicForm/index.vue';
@Component({
  name: 'Dialog',
  components: {
    DynamicForm,
  },
})
export default class extends Vue {
  public dialogVisible = false;

  created() {
    console.log('created');
  }
  public dialogBeforeClose() {
    console.log('listen dialog before close');
  }
  public onConfirm() {
    console.log('listen on confirm');
  }
}
</script>
<style lang="stylus" scoped>
.dialog {
  height: 100%;
  .dialog__wrapper {
    padding: 20px;
    .dialog__title {
      font-size: 20px;
    }
  }
}
</style>
