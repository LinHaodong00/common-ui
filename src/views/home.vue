<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="logo-wrap"><a href="#"
             rel="noopener noreferrer"><img src="@/assets/logo.png"
                 class="logo"></a></div>
        <div class="top-right">
          <li class="am-text-sm">
            <a href="javascript:logout();"
               class="quit">
              <span class="el-icon-switch-button"></span> 退出
            </a>
          </li>
          <li class="am-text-sm">
            <a href="javascript:void();">
              <span class="el-icon-message-solid"></span>
            </a>
          </li>
          <li class="am-text-sm">
            <a href="javascript:void();">
              <span class="welcome">欢迎您，xxx</span>
            </a>
          </li>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="user-panel">
            <div class="avatar">
              <el-avatar :size="80"
                         src="http://wework.qpic.cn/bizmail/EeBDUaj3kcOI2gf8vw3Fe7R8GG7odz2ibN6iavruc48ECvfm3JchQUTA/0"></el-avatar>
            </div>
            <div>XXX</div>
          </div>

          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   background-color="#3A3A3A"
                   text-color="#CFCFCF"
                   @open="handleOpen"
                   @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>数据录入</span>
              </template>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-2">选项2</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-picture"></i>
              <span slot="title">图表显示</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据分析</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import '@/css/home.css'
export default {
  name: 'home',
  mounted: function () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>
