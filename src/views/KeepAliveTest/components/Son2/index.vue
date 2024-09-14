<!--
 * @Date: 2024-09-11 15:36:59
 * @LastEditors: Please set LastEditors
 * @Description: son2
 * @FilePath: src/views/KeepAliveTest/components/Son1/index.vue
-->
<template>
  <main class="son2">
    this is son2
    <el-input v-model="value" placeholder=""></el-input>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: ''
})
export default class extends Vue {
  private value = '';
}
</script>
<style lang="stylus" scoped></style>
