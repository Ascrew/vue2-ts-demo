<!--
 * @Author: zhangyu
 * @Date: 2023-12-07 09:40:15
 * @LastEditors: Please set LastEditors
 * @Description: 动态表单 - 动态rules
 * @FilePath: src/views/DynamicForm/index.vue
-->
<template>
  <main class="dynamic-form">
    <template v-for="(item, index) in list">
      <el-form
        ref="form"
        :model="item"
        label-width="80px"
        inline
        :key="index"
        :rules="getRules(item)"
      >
        <el-form-item label="aaa" prop="aaa">
          <el-input v-model="item.aaa" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="bbb" prop="bbb">
          <el-input v-model="item.bbb" placeholder=""></el-input>
        </el-form-item>
      </el-form>
    </template>
    <el-button type="primary" @click="save()">save</el-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'DynamicForm',
})
export default class extends Vue {
  public list: any = [];
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          aaa: '',
          bbb: '',
        },
        {
          aaa: '',
          bbb: '',
        },
      ];
    }, 2000);
  }

  public getRules(item: any) {
    const reg = /^[1-9]*[1-9][0-9]*$/;
    const validFunc1 = (rules: any, value: any, callback: any) => {
      if (value === '') {
        return callback();
      }
      debugger;
      if (!reg.test(value)) {
        return callback(new Error('请输入正整数'));
      }
      if (item.aaa && value && parseInt(item.aaa) > parseInt(value)) {
        return callback(new Error('结束页码不能小于开始页码'));
      }
      return callback();
    };
    const validFunc2 = (rules: any, value: any, callback: any) => {
      if (value === '') {
        return callback();
      }
      if (!reg.test(value)) {
        return callback(new Error('请输入正整数'));
      }
      return callback();
    };
    return {
      aaa: [{ validator: validFunc2 }],
      bbb: [{ validator: validFunc1 }],
    };
  }
  public async save() {
    const formRefList: any[] = this.$refs.form as any;
    const promiseList: Promise<any>[] = [];
    formRefList.map((formRef: any) => {
      let promise: any = formRef.validate();
      promiseList.push(promise);
    });
    Promise.all(promiseList)
      .then((res) => {
        console.log('listen success', res);
      })
      .catch((err) => {
        console.log('listen not pass', err);
      });
  }
}
</script>
<style lang="stylus" scoped></style>
