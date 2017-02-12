<template>
  <div class="add">
    {{disVal}}
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
    /*computed:Vuex.mapGetters({
      msg : 'getMessage'
    }),*/
    computed:{

      disVal:function(){
        return this.$store.getters.getMessage;
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
