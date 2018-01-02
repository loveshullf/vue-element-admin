/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 14:19:13 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2018-01-02 10:45:57
 */
<!-- 侧边栏目 -->
<template>
   <div class="menu-wrapper">
      <template v-for="item in routers" v-if="!item.hidden&&item.children">
          <router-link v-if="item.children.length===1&&!item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
            <el-menu-item class="submenu-title-noDropdown" :index="item.path+'/'+item.children[0].path">
              <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :svg-name="item.children[0].meta.icon"></svg-icon>
              <span v-if="item.children[0].meta&&item.children[0].meta.title" v-text="item.children[0].meta.title">></span>
            </el-menu-item>
          </router-link>
          
          <el-submenu v-else :index="item.name||item.path" :key="item.name">
            <template slot="title">
              <svg-icon v-if="item.meta&&item.meta.icon" :svg-name="item.meta.icon"></svg-icon>
              <span v-if="item.meta&&item.meta.title" v-text="item.meta.title"></span>
            </template>
            
            <template v-for="child in item.children" v-if="!child.hidden">
              <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routers="[child]" :key="child.path"></sidebar-item>

              <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                <el-menu-item :index="item.path+'/'+child.path">
                  <svg-icon v-if="child.meta&&child.meta.icon" :svg-name="child.meta.icon"></svg-icon>
                  <span v-if="child.meta&&child.meta.title" v-text="child.meta.title"></span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
      </template>
   </div>
</template>

<script type='text/babel'>
export default {
  name: 'SidebarItem',
  props: {
    routers: {
      type: Array
    }
  },
  methods: {}
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>

</style>