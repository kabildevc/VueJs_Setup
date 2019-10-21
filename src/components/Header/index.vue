<template>
  <div id="header-component">
    <img src="../../assets/logo.png" class="header-img">
    <ul>
      <li class="header-component-li header-component-li-border" v-on:click="onClickHandled('/')">Home</li>
      <li class="header-component-li header-component-li-border" v-on:click="onClickHandled('/about')">About Us</li>
      <li class="header-component-li header-component-li-border" v-on:click="onClickHandled('/jobs')">Jobs</li>
      <li class="header-component-li header-component-li-border" v-on:click="onClickHandled('/timer')">Timer</li>
      <li class="header-component-li" v-on:click="onClickHandled('/charts')">Charts</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header'
    }
  },
  methods: {
    onClickHandled(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
  .header-img {
    height: 50px;
    width: auto;
  }
  #header-component {
    height: 100px;
  }
  #header-component > ul {
    display: inline-block;
    margin: 10px;
  }

  .header-component-li {
      display: inline-block;
      margin: 10px;
      width: 100px;
      cursor: pointer;
  }
  .header-component-li-border {
    border-right: 1px solid;
  }
  .header-component-li:hover {
    color: blue;
  }
</style>


