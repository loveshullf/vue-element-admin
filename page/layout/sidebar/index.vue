/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 12:11:26 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-27 14:54:53
 */
<!-- 侧边栏 -->
<template>
  <scrollbar>
    <el-menu mode="vertical" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item></sidebar-item>
    </el-menu>
  </scrollbar>
</template>

<script type='text/babel'>
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
  },

  mounted: {},

  methods: {}
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
</style>