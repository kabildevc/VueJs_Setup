<template>
  <table v-bind:id="id">
    <tbody>
      <th>
        <td v-for="(tHeader, index) in tableHeader">{{tHeader.name}}</td>
      </th>
      <tr v-for="(tData, index) in tableData">
        <td v-for="(tHeader, index) in tableHeader">{{tData[tHeader.key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['id', 'tableData', 'tableHeader'],
  data () {
    return {
      msg: 'Header'
    }
  },
  created(){
    let i = 100; 
    let a = setInterval(()=>{
      console.log(i)
      i--;
      if(i == 0) {
        clearInterval(a)
      }
    }, 1000)
  }
}
</script>

<style scoped>
  table, td {
    border: 1px solid
  }
</style>


