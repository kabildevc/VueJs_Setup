<template>
  <div>
    <header-component></header-component>
    <table-component v-bind:tableData="JobList"  v-bind:tableHeader="[{name: 'SNO', key : 'sno'},{name: 'Name', key : 'name'}]"></table-component>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import HeaderComponent from '../../components/Header'
import TableComponent from '../../components/Table'

// @Component({
//   props: {
//     propMessage: String
//   }
// })
export default {
  name: 'JobList',
  props: ['data'],
  data () {
    return {
      JobList: [{
        sno : 1,
        name : 'Kabildev'
      }],
      isLoading : false
    }
  },
  components : {
    HeaderComponent,
    TableComponent,
  },
  beforeCreate() {
    this.isLoading = true
  },
  created() {
    console.log(this.data)
  }
}
</script>


