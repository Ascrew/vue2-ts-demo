const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 9999,
  },
});
