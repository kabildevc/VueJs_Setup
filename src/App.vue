<template>
  <div id="containers">
    <router-view></router-view>
  </div>
</template>

<script >
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

export default {
  components : {
  },
}
</script>

<style>
#containers {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>