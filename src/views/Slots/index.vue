<!--
 * @Author: zhangyu
 * @Date: 2023-12-15 10:34:39
 * @LastEditors: Please set LastEditors
 * @Description: slot 学习
 * @FilePath: src/views/Swiper/index.vue
-->
<template>
  <main class="zy-slots">
    <slot1>
      <span>this is father component span.</span>
    </slot1>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import slot1 from './Components/slot-1.vue';
@Component({
  components: { slot1 },
  name: 'ZySlots',
})
export default class extends Vue {
  mounted() {
    console.log('listen $slots father', this.$slots);
  }
}
</script>
<style lang="stylus" scoped></style>
