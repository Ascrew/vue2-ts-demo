<!--
 * @Author: zhangyu
 * @Date: 2024-01-11 10:43:14
 * @LastEditors: Please set LastEditors
 * @Description: el table test
 * @FilePath: src/views/TableTest/index.vue
-->
<template>
  <main class="table">
    <!-- <span v-for="item in '123'" :key="item">{{ item }}</span> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="错误数据" width="180">
        <template slot-scope="scope">
          <div v-html="scope.row.text"></div>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Table',
})
export default class extends Vue {
  public tableData: any[] = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      text: '<span style="color: #EA2E2E;">机密</span>',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    },
  ];
  public handleEdit(index: number, row: any) {
    console.log(index, row);
  }
  public handleDelete(index: number, row: any) {
    console.log(index, row);
  }
}
</script>
<style lang="stylus" scoped></style>
