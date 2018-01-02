/*
 * @Author: loveshullf 
 * @Date: 2017-12-28 11:20:09 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2018-01-02 18:02:20
 */
<!-- 首页面板，根据角色不同，面板组件不同 -->
<template>
   <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script type='text/babel'>
import {mapGetters} from 'Vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
export default {
  data () {
    return {
      currentRole: 'adminDashboard'
    };
  },
  components:{
    adminDashboard,
    editorDashboard
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  // created() {
  //   if (!this.roles.includes('admin')) {
  //     this.currentRole = 'editorDashboard'
  //   }
  // }
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.dashboard-container{
  padding:32px;
  background-color: rgb(240, 242, 245);
}
</style>