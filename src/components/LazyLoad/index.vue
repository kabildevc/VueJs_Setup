<template>
  <div id="hero-banner">
    <div v-lazy-container="{ selector: 'img' }">
      <img v-for="(imgSrc, index) in imgResult"  v-if="imgSrc" class="hero-banner-img" v-bind:data-src="imgSrc+'?'+index" data-error="src/assets/giphy.gif" data-loading="src/assets/giphy.gif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['timeout'],
  data () {
    return {
      msg: 'Header',
      imgResult: []
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  created() {
    let interval = 0
    for(let i=0; i< 4; i++) {
      this.imgResult.push('https://i2.wp.com/www.iamabiker.com/wp-content/uploads/2018/04/Royal-Enfield-Thunderbird-350X-HD-wallpapers-1.jpg');
    }
  }
}
</script>

<style scoped>
  .hero-banner-img {
    width: 200px;
    height : auto;
  }
</style>


