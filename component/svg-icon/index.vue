/*
 * @Author: loveshullf 
 * @Date: 2017-12-29 15:10:02 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2017-12-29 15:28:16
 * 2017-12-29 添加自定义样式;
 */
<template>
  <svg :class="iconClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name:'SvgIcon',
  props: {
    //图标名称
    SvgName: {
      type: String,
      required: true
    },
    //图标样式类名，自定义图标样式
    SvgClass:{
      type:String
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.SvgName}`
    },
    iconClass(){
      if (this.SvgClass){
        return 'svg-icon '+this.SvgClass
      }else{
         return 'svg-icon'
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .svg-icon {
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>