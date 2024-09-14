<!--
 * @Date: 2024-09-11 11:32:32
 * @LastEditors: Please set LastEditors
 * @Description: keep alive 缓存测试
 * @FilePath: src/views/KeepAliveTest/index.vue
-->
<template>
  <div v-if="$route.path == '/test1'">
    <el-button type="primary" @click="jumpTo">jump to son</el-button>
    this is father input
    <el-input v-model="value" placeholder=""></el-input>
  </div>

  <router-view v-else></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'KeepAliveTest'
})
export default class extends Vue {
  private value = '';
  private jumpTo() {
    this.$router.push('/test1/son');
  }
}
</script>
<style lang="stylus" scoped></style>
