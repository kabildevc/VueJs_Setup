import Vue from 'vue'
import Component from 'vue-class-component'
import HeaderComponent from '../../components/Header/index'
import TimerComponent from '../../components/Timer/index'

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


