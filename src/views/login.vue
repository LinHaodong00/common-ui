<template>
  <div class="container">
    <div class="login-bg">
      <div class="login">
        <!-- <div class="title">账户登陆</div> -->
        <el-tabs v-model="activeName"
                 :stretch="true">
          <el-tab-pane label="账户登陆"
                       name="first">
            <el-form>
              <el-form-item>
                <el-input size="small"
                          v-model="account"
                          placeholder="请输邮箱/手机号/账户"
                          prefix-icon="el-icon-user"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input size="small"
                          v-model="password"
                          placeholder="请输入密码"
                          :show-password="true"
                          prefix-icon="el-icon-lock"></el-input>
                <el-checkbox class="remember"
                             v-model="checked">记住我</el-checkbox>
              </el-form-item>
              <el-form-item>

                <el-button size="small"
                           class="login_bt"
                           @click="doLogin">登陆</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="二维码登陆"
                       name="second">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import '@/css/login.css'
import { doLogin } from '@/api/login/login'
export default {
  name: 'login',
  data: function () {
    return {
      account: '',
      password: '',
      activeName: 'first',
      checked: true
    }
  },
  methods: {
    doLogin: function () {
      doLogin(this.account, this.password).then(res => {
        if (res.data.code == 0) {
          console.log(this.$store.state)
          this.$store.commit('setInfo', res.data.data.user);
          console.log(this.$store.state)
          console.log(res)
          this.$message.success(res.data.msg);
        } else {
          this.$message.error(res.data.msg);
        }
      })

    }
  }
}
</script>
