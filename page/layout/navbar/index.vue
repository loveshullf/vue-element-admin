/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 12:11:17 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-29 16:53:49
 */
<!-- 导航栏 -->
<template>
  <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar"
      :isActive="sidebar.opened" ></hamburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        <div class="  right-menu-item">错误</div>
        
         <el-tooltip effect="dark" content="全屏" placement="bottom">
           <screenfull class="right-menu-item screenfull"></screenfull>
        </el-tooltip>

        <el-dropdown trigger="click"  class=' international'>
           <span>
             <svg-icon svg-name="language" svg-class="right-menu-item international-icon"></svg-icon>
             </span> 
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文
                </el-dropdown-item> 
                <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        
        <el-tooltip effect="dark" content="换肤" placement="bottom">
          <theme-picker class="right-menu-item "></theme-picker>
        </el-tooltip>

         <el-dropdown trigger="click"  class=' avatar-container'>
          <span class="right-menu-item avatar-wrapper">
            <img class="user-avatar" src=".\user-img\user-img.gif"/>
            <i class="el-icon-caret-bottom"></i>
         </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item> 
              <el-dropdown-item>项目地址</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </el-menu>
</template>

<script type='text/babel'>
import { mapGetters } from "vuex";
import Hamburger from "@/component/hamburger";
import Breadcrumb from "@/component/breadcrumb";
import Screenfull from "@/component/screenfull";
import ThemePicker from "@/component/theme-picker";
export default {
  data() {
    return {};
  },
  components: {
    Hamburger,
    Breadcrumb,
    Screenfull,
    ThemePicker
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    }
  }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
      vertical-align: 10px;
    }
   
    .international{
      vertical-align: top;
      .international-icon{
        font-size: 20px;
        cursor: pointer;
        vertical-align: -5px;
      }
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>