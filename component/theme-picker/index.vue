/*
 * @Author: loveshullf 
 * @Date: 2017-12-29 16:44:33 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-30 15:04:43
 * 2017+12-29 界面展示，功能未写
 */
<!-- 主题控件 -->
<template>
   <el-color-picker
    class="theme-picker"
    popper-class="theme-picker-dropdown"
    >
    </el-color-picker>
</template>

<script type='text/babel'>
export default {
  data () {
    return {
      chalk: '', // content of theme-chalk css
    };
  }
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>