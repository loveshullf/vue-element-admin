/*
 * @Author: loveshullf 
 * @Date: 2017-12-27 16:18:04 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-29 16:40:47
 */
<!--  -->
<template>
  <el-breadcrumb class="app-breadcrumb" separator='/'>
    <transition-group name="breadcrumb">
        <el-breadcrumb v-for="(item,index) in levelList" :key="item.path" v-if="item.meta.title">
            <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect" v-text="item.meta.title"></span>
            <router-link v-else :to="item.redirect||item.path" v-text="item.meta.title"></router-link>
        </el-breadcrumb>
    </transition-group>
  </el-breadcrumb>
</template>

<script type='text/babel'>
export default {
  data () {
    return {
      levelList: null
    };
  },
 created() {
    this.getBreadcrumb()
  },
  methods: { 
    getBreadcrumb(){
      let matched=this.$route.matched.filter(item=>item.name)
      const first=matched[0]
      if(first && first.name !=='dashboard'){
        matched=[{path:'/dashboard',meta:{title:'dashboard'}}].concat(matched)
      }
      this.levelList = [
          {
            path:'/dashboard',
            name:'dashboard',
            meta:{title:'dashboard',icon:'dashboard',noCache:true}
          }
        ]
    }}
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.app-breadcrumb .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>