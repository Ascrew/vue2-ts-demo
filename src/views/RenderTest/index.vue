<!--
 * @Date: 2024-09-05 09:54:27
 * @LastEditors: Please set LastEditors
 * @Description: 测试 render 
 * @FilePath: src/views/ Test/index.vue
-->
<template>
  <main class="test">
    <input @input="onChangeTest" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="测试输入框" prop="corpname">
        <CustomFormItem :test="test" />
      </el-form-item>
    </el-form>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomFormItem from './CustomFormItem/index.vue';
@Component({
  name: 'Test',
  components: {
    CustomFormItem
  }
})
export default class extends Vue {
  private form: any = {
    corpname: 'test corp'
  };

  private test = '1';

  private onChangeTest(e: any) {
    this.test = e.target.value;
  }
}
</script>
