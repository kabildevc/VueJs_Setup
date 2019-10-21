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


