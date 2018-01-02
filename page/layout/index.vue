/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 11:57:22 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2018-01-02 15:19:53
 */
<!--  -->
<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
          <navbar></navbar>
          <tags-view></tags-view>
          <app-main></app-main> 
      </div>
  </div>
</template>

<script type='text/babel'>
import { mapGetters } from "vuex";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import AppMain from "./appMain";
import TagsView from "./tagsView";
export default {
  data() {
    return {};
  },
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagsView
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "asset/style/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>