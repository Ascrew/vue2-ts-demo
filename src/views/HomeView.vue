<template>
  <div class="home">
    <el-table :data="tableData" border stripe :span-method="rightSpanMethod">
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      ></el-table-column>
    </el-table>

    <!-- <js-mind
      class="test"
      :values="mind"
      :options="options"
      v-show="isShow"
      ref="jsMind"
      height="600px"
      width="600px"
    ></js-mind> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Dialog from './Dialog.vue'
// import 'jsmind/style/jsmind.css'
// import { jsMind } from 'jsmind/js/jsmind.js'

@Component({
  components: {
    HelloWorld,
    Dialog,
  },
})
export default class HomeView extends Vue {
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
  ]
  private tableData = []
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
    ]
    this.rowspan()
  }
  private spanArr: any = []
  private position = 0

  private spanArr1: any = []
  private position1 = 0

  private rightSpanMethod({ row, column, rowIndex, columnIndex }) {
    //通过判断某一列是否需要合并相同的添加不同if条件
    if (columnIndex === 0) {
      const _row = this.spanArr[rowIndex] //spanArr为控制合并几行的数组eg:[4, 0, 0, 0, 4, 0, 0, 0, 2, 0]
      const _col = _row > 0 ? 1 : 0 //合并的行数大于0那就只有一列，小于0就列数为0,相当于没了
      return {
        rowspan: _row,
        colspan: _col,
      }
    }
    if (columnIndex === 1) {
      const _row = this.spanArr1[rowIndex]
      const _col = _row > 0 ? 1 : 0
      return {
        rowspan: _row,
        colspan: _col,
      }
    }
  }
  private rowspan() {
    this.tableData.forEach((item, index) => {
      if (index === 0) {
        //首次遍历获取得到的数据，将第一行数据控制合并行数的数组push(1)，表示合并一行
        this.spanArr.push(1)
        this.position = 0

        this.spanArr1.push(1)
        this.position1 = 0
      } else {
        if (this.tableData[index].nd === this.tableData[index - 1].nd) {
          this.spanArr[this.position] += 1 //只要sDtsend(发放月份)字段相等，spanArr的第index个元素就加1表示合并一行
          this.spanArr.push(0) //被合并的行要push(0)表示没了被合并了
          if (this.tableData[index].type === this.tableData[index - 1].type) {
            this.spanArr1[this.position1] += 1 //只要sDtsend(发放月份)字段相等，spanArr的第index个元素就加1表示合并一行
            this.spanArr1.push(0) //被合并的行要push(0)表示没了被合并了
          } else {
            this.spanArr1.push(1) //push(1)是因为行不合并也是从1行开始
            this.position1 = index //等于index表示从不等的那一行序号开始从1往上加
          }
        } else {
          //直到某字段不等时，改变position值
          this.spanArr.push(1) //push(1)是因为行不合并也是从1行开始
          this.position = index //等于index表示从不等的那一行序号开始从1往上加

          this.spanArr1.push(1) //push(1)是因为行不合并也是从1行开始
          this.position1 = index //等于index表示从不等的那一行序号开始从1往上加
        }
      }
    })

    console.log('listen spanarr', this.spanArr)
    console.log('listen position', this.position)
    console.log('listen spanarr1', this.spanArr1)
    console.log('listen position1', this.position1)
  }

  private mind = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    meta: {
      name: '思维导图',
      author: 'hizzgdev@163.com',
      version: '0.2',
    },
    /* 数据格式声明 */
    format: 'node_tree',
    /* 数据内容 */
    data: {
      id: 'root',
      topic: 'jsMind',
      children: [
        {
          id: 'easy', // [必选] ID, 所有节点的ID不应有重复，否则ID重复的结节将被忽略
          topic: 'Easy', // [必选] 节点上显示的内容
          direction: 'right', // [可选] 节点的方向，此数据仅在第一层节点上有效，目前仅支持 left 和 right 两种，默认为 right
          expanded: true, // [可选] 该节点是否是展开状态，默认为 true
          children: [
            { id: 'easy1', topic: 'Easy to show' },
            { id: 'easy2', topic: 'Easy to edit' },
            { id: 'easy3', topic: 'Easy to store' },
            { id: 'easy4', topic: 'Easy to embed' },
          ],
        },
        {
          id: 'open',
          topic: 'Open Source',
          direction: 'right',
          expanded: true,
          children: [
            { id: 'open1', topic: 'on GitHub' },
            { id: 'open2', topic: 'BSD License' },
          ],
        },
        {
          id: 'powerful',
          topic: 'Powerful',
          direction: 'right',
          children: [
            { id: 'powerful1', topic: 'Base on Javascript' },
            { id: 'powerful2', topic: 'Base on HTML5' },
            { id: 'powerful3', topic: 'Depends on you' },
          ],
        },
        {
          id: 'other',
          topic: 'test node',
          direction: 'right',
          children: [
            { id: 'other1', topic: "I'm from local variable" },
            { id: 'other2', topic: 'I can do everything' },
          ],
        },
      ],
    },
  }
  private options = {
    container: 'jsmind_container', // [必选] 容器的ID
    editable: false, // [可选] 是否启用编辑
    theme: '', // [可选] 主题
    view: {
      engine: 'canvas', // 思维导图各节点之间线条的绘制引擎
      hmargin: 120, // 思维导图距容器外框的最小水平距离
      vmargin: 50, // 思维导图距容器外框的最小垂直距离
      line_width: 2, // 思维导图线条的粗细
      line_color: '#ddd', // 思维导图线条的颜色
    },
    layout: {
      hspace: 100, // 节点之间的水平间距
      vspace: 20, // 节点之间的垂直间距
      pspace: 20, // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）
    },
    shortcut: {
      enable: false, // 是否启用快捷键 默认为true
    },
  }
  private isShow = true

  private row = {
    a: 1,
    b: 2,
  }
  private test() {
    this.visible = true
  }
  private getMsg() {
    return 'test'
  }
  private visible = false
}
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
}
.test {
  height: 100%;
  width: 800px;
}
</style>
