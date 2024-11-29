<!--
 * @Date: 2024-11-28 15:08:28
 * @LastEditors: Please set LastEditors
 * @Description: 控制升序或降序的箭头
 * @FilePath: src\components\common\sort-toggle\sort-toggle-component.vue
-->
<template>
  <div class="sort-arrows" @click="toggleOrder">
    <i
      class="sort-caret ascending"
      :class="{ 'asc-active': sortOrder === 'asc' }"
      @click="toggleBtn('desc')"
    ></i>

    <i
      class="sort-caret descending"
      :class="{ 'desc-active': sortOrder === 'desc' }"
      @click="toggleBtn('asc')"
    ></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc'
}

@Component
export default class SortArrows extends Vue {
  @Prop({ default: SortOrder.Ascending })
  readonly defaultValue!: SortOrder;

  created() {
    this.sortOrder = this.defaultValue;
  }
  private sortOrder: SortOrder = SortOrder.Ascending;

  @Emit('change')
  private toggleOrder(event: MouseEvent): SortOrder {
    event.preventDefault();
    this.sortOrder =
      this.sortOrder === SortOrder.Ascending
        ? SortOrder.Descending
        : SortOrder.Ascending;
    return this.sortOrder;
  }

  private toggleBtn(arrow: SortOrder) {
    this.sortOrder = arrow;
  }
}
</script>

<style lang="stylus" scoped>
.sort-arrows {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 24px;
  // vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  position: relative;

  .ascending {
    border-bottom-color: #c0c4cc;
    top: 5px;
  }

  .descending {
    border-top-color: #c0c4cc;
    bottom: 5px;
  }

  .asc-active {
    border-bottom-color: #409eff;
  }

  .desc-active {
    border-top-color: #409eff;
  }
}

.sort-caret {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
  left: 7px;
}
</style>
