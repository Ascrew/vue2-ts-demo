<!--
 * @Date: 2024-09-11 15:14:29
 * @LastEditors: Please set LastEditors
 * @Description: layout
 * @FilePath: src/views/Layout/index.vue
-->
<template>
  <main class="layout">
    <div class="aside">
      <el-button type="primary" @click="turnRoute('/login')">
        切换路由1
      </el-button>
      <el-button type="primary" @click="turnRoute('/test1')">
        切换路由2
      </el-button>
    </div>
    <div class="article">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view
          v-if="$route.meta.keepAlive"
          :key="
            $route.name +
            ($route.params.id || $route.query.id || $route.query.pid || null)
          "
        />
      </keep-alive>
      <router-view
        v-if="!$route.meta.keepAlive"
        :key="
          $route.name +
          ($route.params.id || $route.query.id || $route.query.pid || null)
        "
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Layout'
})
export default class extends Vue {
  private turnRoute(path: string) {
    this.$router.push(path);
  }
}
</script>
<style lang="stylus" scoped>
.layout {
  height: 100%;
  display: flex;
}

.aside {
  width: 300px;
  height: 100%;
  margin-right: 20px;
  border-right: 1px solid #ccc;
}

.article {
  height: 100%;
  width: 0;
  flex: 1;
}
</style>
