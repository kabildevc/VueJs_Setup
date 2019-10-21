<template>
  <div id="about-us">
    <header-component></header-component>
    <lazy-load></lazy-load>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header'
import LazyLoad from '../../components/LazyLoad'
export default {
  name: 'About_Page',
  data () {
    return {
      msg: 'About Page'
    }
  },
  components : {
    HeaderComponent,
    LazyLoad
  },
  created() {
    console.log(this.$route.query)
    console.log(this.$route.params)
  }
}
</script>


