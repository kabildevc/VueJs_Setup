<template>
  <div>
    <header-component></header-component>
    <hero-banner timeout="2000"></hero-banner>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header'
import HeroBanner from '../../components/HeroBanner'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'HomePage'
    }
  },
  components : {
    HeaderComponent,
    HeroBanner
  }
}
</script>


