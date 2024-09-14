<!--
 * @Date: 2024-09-11 14:01:35
 * @LastEditors: Please set LastEditors
 * @Description: keep alive son component
 * @FilePath: src/views/KeepAliveTest/components/Son/index.vue
-->
<template>
  <main class="keep-alive-son">
    this is son component input
    <el-input v-model="value" placeholder=""></el-input>
    <el-button type="primary" @click="jumpTo('/test1')">jumpToFather</el-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'KeepAliveSon'
})
export default class extends Vue {
  private value = '';

  private jumpTo(path: string) {
    this.$router.push(path);
  }
}
</script>
<style lang="stylus" scoped></style>
