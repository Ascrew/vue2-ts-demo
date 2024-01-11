<!--
 * @Author: zhangyu
 * @Date: 2023-06-16 09:45:59
 * @LastEditors: Please set LastEditors
 * @Description: el-table合并行和列demo
 * @FilePath: src/views/MergeTable.vue
-->
<template>
  <main class="merge-table">
    <el-table :data="tableData" border stripe :span-method="rightSpanMethod">
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      ></el-table-column>
    </el-table>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MergeTable } from './modal';
@Component({
  name: 'MergeTable',
})
export default class extends Vue {
  private columns = [
    {
      id: 'nd',
      label: '年度',
      width: '100',
    },

    {
      id: 'type',
      label: '类型',
      width: '100',
    },

    {
      id: 'content',
      label: '内容',
      width: '100',
    },
  ];
  private tableData: MergeTable[] = [];

  mounted() {
    this.tableData = [
      {
        id: '1',
        nd: '2000',
        type: 'type1',
        content: '111',
      },
      {
        id: '2',
        nd: '2000',
        type: 'type1',
        content: '222',
      },
      {
        id: '3',
        nd: '2000',
        type: 'type2',
        content: '333',
      },
      {
        id: '4',
        nd: '2000',
        type: 'type5',
        content: '444',
      },
      {
        id: '5',
        nd: '3000',
        type: 'type5',
        content: '555',
      },
      {
        id: '6',
        nd: '3000',
        type: 'type3',
        content: '666',
      },
      {
        id: '7',
        nd: '3000',
        type: 'type4',
        content: '777',
      },
      {
        id: '8',
        nd: '3000',
        type: 'type4',
        content: '888',
      },
    ];
    this.rowspan();
  }

  private row = {
    a: 1,
    b: 2,
  };
  private spanArr: number[] = [];
  private position = 0;

  private spanArr1: number[] = [];
  private position1 = 0;

  private rightSpanMethod({ rowIndex, columnIndex }: any) {
    //通过判断某一列是否需要合并相同的添加不同if条件
    if (columnIndex === 0) {
      const _row = this.spanArr[rowIndex]; //spanArr为控制合并几行的数组eg:[4, 0, 0, 0, 4, 0, 0, 0, 2, 0]
      const _col = _row > 0 ? 1 : 0; //合并的行数大于0那就只有一列，小于0就列数为0,相当于没了
      return {
        rowspan: _row,
        colspan: _col,
      };
    }
    if (columnIndex === 1) {
      const _row = this.spanArr1[rowIndex];
      const _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col,
      };
    }
  }
  private rowspan() {
    this.tableData.forEach((item, index) => {
      if (index === 0) {
        //首次遍历获取得到的数据，将第一行数据控制合并行数的数组push(1)，表示合并一行
        this.spanArr.push(1);
        this.position = 0;

        this.spanArr1.push(1);
        this.position1 = 0;
      } else {
        if (this.tableData[index].nd === this.tableData[index - 1].nd) {
          this.spanArr[this.position] += 1; //只要sDtsend(发放月份)字段相等，spanArr的第index个元素就加1表示合并一行
          this.spanArr.push(0); //被合并的行要push(0)表示没了被合并了
          if (this.tableData[index].type === this.tableData[index - 1].type) {
            this.spanArr1[this.position1] += 1; //只要sDtsend(发放月份)字段相等，spanArr的第index个元素就加1表示合并一行
            this.spanArr1.push(0); //被合并的行要push(0)表示没了被合并了
          } else {
            this.spanArr1.push(1); //push(1)是因为行不合并也是从1行开始
            this.position1 = index; //等于index表示从不等的那一行序号开始从1往上加
          }
        } else {
          //直到某字段不等时，改变position值
          this.spanArr.push(1); //push(1)是因为行不合并也是从1行开始
          this.position = index; //等于index表示从不等的那一行序号开始从1往上加

          this.spanArr1.push(1); //push(1)是因为行不合并也是从1行开始
          this.position1 = index; //等于index表示从不等的那一行序号开始从1往上加
        }
      }
    });

    console.log('listen spanarr', this.spanArr);
    console.log('listen position', this.position);
    console.log('listen spanarr1', this.spanArr1);
    console.log('listen position1', this.position1);
  }
}
</script>
<style lang="stylus" scoped></style>
