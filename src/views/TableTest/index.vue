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
    <el-table
      :data="tableData"
      border
      height="500"
      size="small"
      class="test-table"
    >
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
        <template>
          <el-tag style="cursor: pointer">{{ 0 }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        width="180"
        prop="address"
      ></el-table-column>
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
    <div>------------------------------------------------</div>
    <SonTable></SonTable>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SonTable from './components/SonTable/index.vue';
@Component({
  name: 'Table',
  components: {
    SonTable
  }
})
export default class extends Vue {
  public tableData: any[] = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      text: '<span style="color: #EA2E2E;">机密</span>'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ];
  public handleEdit(index: number, row: any) {
    console.log(index, row);
  }
  public handleDelete(index: number, row: any) {
    console.log(index, row);
  }
}
</script>
<style lang="stylus" scoped>
>>> .test-table {
  .el-table__cell {
    padding: 0 0;
  }
}
</style>
