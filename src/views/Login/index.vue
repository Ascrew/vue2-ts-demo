<!--
 * @Author: zhangyu
 * @Date: 2023-07-11 11:09:24
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面样式
 * @FilePath: src/views/Login/index.vue
-->
<template>
  <main class="login">
    <div class="form-wrapper">
      <el-form class="login__form" :model="loginForm" ref="loginForm">
        <el-form-item prop="username">
          <div class="img-background">
            <img class="zy-icon" src="@/assets/uname.png" />
          </div>
          <el-input
            class="login__form__input login__form__input__username"
            v-model="loginForm.username"
            placeholder="账号：请输入您的账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="icon iconpwd"
            class="login__form__input"
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'Login'
})
export default class extends Vue {
  private loginForm: any = {
    username: '',
    password: ''
  };
}
</script>
<style lang="stylus" scoped>
.login
  width 100%
  min-width 1200px
  height 100vh
  min-height 600px
  overflow hidden
  background-image url('~@/assets/login-bg.png')
  background-repeat no-repeat
  background-size 100% 100%
  background-position center center
  background-color #000d35
  position relative
.form-wrapper
  padding 200px
  width 600px
  display: inline-block;
  position: absolute;
  top: 150px;
  right: 100px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(1px) saturate(85%);
  backdrop-filter: blur(1px) saturate(85%);
  box-shadow: inset 0px 0px 12px 3px rgba(0,0,0,0.1), inset 0px 0px 7px 2px rgba(255,255,255,0);
</style>
