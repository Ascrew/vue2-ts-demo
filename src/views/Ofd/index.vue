<!--
 * @Date: 2024-09-13 17:28:41
 * @LastEditors: Please set LastEditors
 * @Description: preview ofd file in web
 * @FilePath: src/views/Ofd/index.vue
-->
<template>
  <main class="ofd">
    <div id="content"></div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { parseOfdDocument, renderOfd } from 'ofd.js';
@Component({
  name: 'Ofd'
})
export default class extends Vue {
  mounted() {
    this.renderOfd();
  }
  private renderOfd() {
    // eslint-disable-next-line
    const that = this;
    parseOfdDocument({
      ofd: '/test.ofd', //file 可以为文件链接、上传的文件对象
      success(res: any) {
        //输出ofd每页的div
        const divs = renderOfd(1000, res[0]);
        let contentDiv: any = document.getElementById('content');
        contentDiv.innerHTML = '';
        for (const div of divs) {
          contentDiv.appendChild(div);
        }
      },
      fail(error: any) {
        console.log(error);
      }
    });
  }
}
</script>
<style lang="stylus" scoped></style>
