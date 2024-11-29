<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class extends Vue {
  private turnRoute(path: string) {
    this.$router.push(path);
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
