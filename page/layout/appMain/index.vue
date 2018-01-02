/*
 * @Author: loveshullf 
 * @Date: 2017-12-23 12:13:19 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2018-01-02 15:16:07
 */
<!-- 主面板 -->
<template>
 <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script type='text/babel'>
export default {
  data() {
    return {};
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>

</style>