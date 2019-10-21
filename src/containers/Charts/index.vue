<template>
  <div>
    <header-component></header-component>
    <linechart-component v-bind:chartdata="linechartdata" v-bind:options="options"></linechart-component>
    <linechart-component v-bind:chartdata="linechartdata" v-bind:options="stackedoptions"></linechart-component>
    <piechart-component v-bind:chartdata="piechartdata" v-bind:options="options"></piechart-component>
    <barchart-component v-bind:chartdata="barchartdata" v-bind:options="stackedoptions"></barchart-component>
    <doughnut-component v-bind:chartdata="piechartdata" v-bind:options="options"></doughnut-component>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header'
import LinechartComponent from '../../components/LineChart'
import PiechartComponent from '../../components/PieChart'
import BarchartComponent from '../../components/BarChart'
import DoughnutComponent from '../../components/Doughnut'
export default {
  name: 'Chart',
  props: ['data'],
  data () {
    return {
      isLoading : false,
      linechartdata : {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Score',
            backgroundColor: '#E33267',
            data: [7, 8, 12, 11, 16, 32, 21, 12, 54, 26, 12, 9]
          },
          {
            label: 'Score',
            backgroundColor: '#f87979',
            data: [46, 61, 46, 66, 43, 21, 64, 97, 65, 47, 94, 64]
          },
          {
            label: 'Score',
            backgroundColor: '#41b883',
            data: [16, 62, 36, 76, 73, 74, 54, 50, 16, 76, 37, 64]
          },
          {
            label: 'Score',
            backgroundColor: '#35495e',
            data: [7, 8, 12, 11, 16, 32, 21, 12, 54, 26, 12, 9]
          }
        ]
      }, 
      piechartdata : {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Score',
            backgroundColor: ["#b67163", "#b6a663", "#85c454","#54c490", "#54c3c4", "#5e80ba","#695eba", "#a55eba", "#ba5e8f","#990f0f", "#419e10", "#14109e"],
            data: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          }
        ]
      },
      barchartdata : {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Blue',
            backgroundColor: '#14109e',
            borderColor: '#000',
            showLine: false,
            data: [7, 8, 12, 11, 16, 32, 21, 12, 54, 26, 12, 9]
          },
          {
            label: 'Green',
            backgroundColor: '#419e10',
            borderColor: '#000',
            showLine: false,
            data: [46, 61, 46, 66, 43, 21, 64, 97, 65, 47, 94, 64]
          },
          {
            label: 'Red',
            backgroundColor: '#990f0f',
            borderColor: '#000',
            showLine: false,
            data: [16, 62, 36, 76, 73, 74, 54, 50, 250, 76, 37, 64]
          },
          {
            label: 'Green',
            backgroundColor: '#695eba',
            borderColor: '#000',
            showLine: false,
            data: [32, 31, 36, 76, 73, 74, 54, 50, 16, 76, 37, 64]
          },
          {
            label: 'Green',
            backgroundColor: '#54c490',
            borderColor: '#000',
            showLine: false,
            data: [64, 116, 36, 76, 73, 174, 54, 50, 116, 76, 77, 64]
          },
          {
            label: 'Green',
            backgroundColor: '#b67163',
            borderColor: '#000',
            // borderWidth: 2,
            showLine: false,
            data: [118, 36, 36, 76, 73, 74, 154, 50, 16, 176, 37, 64]
          }
        ]
      },
      options : {responsive: true, maintainAspectRatio: false,},
      stackedoptions : {
        responsive: true, 
        maintainAspectRatio: false, 
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }},
    }
  },
  components : {
    HeaderComponent,
    LinechartComponent,
    PiechartComponent,
    BarchartComponent,
    DoughnutComponent
  },
  beforeCreate() {
    this.isLoading = true
  },
  created() {
    console.log(this.data)
  }
}
</script>


