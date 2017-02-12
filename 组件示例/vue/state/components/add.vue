<template>
  <div class="add">
    <input type="button" value="点击我" @click="add">
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App111'
      }
    },
    methods:{
      add : function(){
        this.$store.dispatch('ADD',2).then(function(resp){
          console.log(resp)
        })
        //this.$store.commit('ADD',111)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
