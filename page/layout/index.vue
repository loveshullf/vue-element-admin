/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 11:57:22 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-25 11:48:55
 */
<!--  -->
<template>
  <div class="app-wrapper">
      <sidebar></sidebar>
      <div class="main-container">
          <navbar></navbar>
          <app-main></app-main>
      </div>
  </div>
</template>

<script type='text/babel'>
import Sidebar from './sidebar';
import Navbar from './navbar';
import AppMain from './main';
export default {
  data () {
    return {
    };
  },

  components: {
      Sidebar,
      Navbar,
      AppMain
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import 'asset/style/mixin.scss';
.app-wrapper{
  @include clearfix;
  position: relative;
  height:100%;
  width:100%;
}
</style>