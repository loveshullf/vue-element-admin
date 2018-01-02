/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 12:11:26 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-30 15:35:45
 */
<!-- 侧边栏 -->
<template>
  <scrollbar>
    <el-menu mode="vertical" 
    background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routers="permission_routers"></sidebar-item>
    </el-menu>
  </scrollbar>
</template>

<script type='text/babel'>
import {mapGetters} from 'vuex'
import Scrollbar from '@/component/scrollbar';
import SidebarItem from './sidebarItem';
export default {
  data () {
    return {
    };
  },
  components: {
    Scrollbar,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse(){
      return !this.sidebar.opened
    }
  }
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
</style>