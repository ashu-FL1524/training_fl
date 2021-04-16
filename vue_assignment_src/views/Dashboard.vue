<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
  <div class="row">
  <div class="col-50">
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
  <div class="col-50">
      <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
    </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
name: 'DashBoard',
data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
};
</script>

<style lang="scss" scoped>
  $header-color: red;
  h1{
    text-align: center;
    color: $header-color;
  }

.col-50 {
  float: left;
  width: 50%;
  margin-top: 60px;
}
.row{
  margin-left: 100px;
}
</style>