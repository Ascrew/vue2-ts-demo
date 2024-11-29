<!--
 * @Date: 2024-11-28 15:49:04
 * @LastEditors: Please set LastEditors
 * @Description: 扩展穿梭框
 * @FilePath: src/views/Transfer/index.vue
-->
<template>
  <main class="zy-transfer">
    <el-transfer
      :titles="['字段列表', '已排序字段']"
      v-model="thirdTransferValue"
      :data="thirdTransfer"
      @change="changeThirdTransfer"
      :render-content="renderContent"
    ></el-transfer>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SortToggle from '../SortToggle/index.vue';
@Component({
  name: '',
  components: {
    SortToggle
  }
})
export default class extends Vue {
  created() {
    setTimeout(() => {
      let list = ['111'];
      this.thirdTransferValue = list;
      this.arrowList = {};
      list.forEach((item) => (this.arrowList[item] = 'desc'));
    }, 1000);
  }

  private thirdTransfer = [
    {
      label: '单位一',
      key: '111'
    },
    {
      label: '单位二',
      key: '222'
    }
  ];
  private thirdTransferValue: Array<any> = [];

  private thirdTransferArray: Array<any> = [];

  public changeThirdTransfer(
    value: string[],
    arrow: string,
    lists: string[]
  ): void {
    console.log('lsiten value', value);
    console.log('lsiten arrow', arrow);
    console.log('lsiten lists', lists);
    if (arrow === 'right') {
      lists.forEach((item) => {
        this.arrowList[item] = 'asc';
      });
    } else {
      lists.forEach((item) => {
        delete this.arrowList[item];
      });
    }

    this.thirdTransferArray = this.thirdTransferValue;
  }

  private arrowList: Record<string, any> = {};

  private renderContent(
    h: typeof this.$createElement,
    option: { key: string; label: string }
  ) {
    const isRightPanel = this.thirdTransferValue.includes(option.key); // 判断是否在右侧面板
    if (isRightPanel) {
      return h(
        'div',
        {
          class: {
            'zy-transfer__label': true
          }
        },
        [
          h('span', option.label),
          h(SortToggle, {
            props: {
              defalutValue: this.arrowList[option.key]
            },
            on: {
              change: (val: string) => {
                this.sortToggle(val, option.key);
              }
            }
          })
        ]
      );
    }
    return h('span', option.label); // 左侧保持原样
  }

  private sortToggle(val: any, key: string) {
    this.arrowList[key] = val;
    console.log('lsiten this.arrowlist', this.arrowList);
  }
}
</script>
<style lang="stylus" scoped>
>>> .zy-transfer__label {
  display: flex;
}
</style>
