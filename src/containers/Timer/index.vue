<template>
  <div>
    <header-component></header-component>
    <timer-component ></timer-component>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import HeaderComponent from '../../components/Header'
import TimerComponent from '../../components/Timer'

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
    TimerComponent,
  },
  beforeCreate() {
    this.isLoading = true
  },
  created() {
    console.log(this.data)
  },
  mounted() {
    
  },
  methods: {
    hello() {

    }
  }
}
</script>

<style></style>


