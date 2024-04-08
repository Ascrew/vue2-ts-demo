<!--
 * @Date: 2024-01-25 15:46:04
 * @LastEditors: Please set LastEditors
 * @Description: slot 1
 * @FilePath: src/views/Slots/Components/slot-1.vue
-->
<template>
  <main class="slot-1">
    <span>this is slot 1 component.</span>
    <span>{{ $slots['test'] }}</span>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Slot1',
})
export default class extends Vue {
  created() {
    console.log('listen $slots in created', this.$slots);
  }
  mounted() {
    console.log('listen $slots', this.$slots);
  }
}
</script>
<style lang="stylus" scoped></style>
