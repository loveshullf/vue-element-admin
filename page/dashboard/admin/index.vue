/*
 * @Author: loveshullf 
 * @Date: 2018-01-02 17:37:15 
 * @Last Modified by: loveshullf
 * @Last Modified time: 2018-01-02 18:44:48
 * 面板主要有:
 * GithubCorner 
 * PanelGroup --面板组
 * LineChart 
 * RaddarChart 
 * PieChart 
 * BarChart 
 * TransactionTable 
 * TodoList 
 * BoxCard 
 */
<!-- 管理员首页面板 -->
<template>
   <div class="dashboard-container">
     <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
       <line-chart :chart-data="lineChartData"></line-chart>
      </el-row>
   </div>
</template>

<script type='text/babel'>
import PanelGroup from './../components/PanelGroup';
import LineChart from './../components/LineChart';

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  data () {
    return {
      lineChartData: lineChartData.newVisitis
    };
  },
  components:{
    PanelGroup,
    LineChart
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
</style>