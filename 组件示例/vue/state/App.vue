<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->
    <input @click="incrementClick" type="button" value="点击">
    {{result}}
    <add></add>

    <div>
      <display></display>
    </div>
  </div>
</template>

<script>
import add from './components/add'
import store from './js/store'
import display from './components/display.vue'

export default {
  name: 'app',

  computed: {
    result () {
      return store.state.count
    }
  },
  methods: {
    incrementClick () {
      store.commit('increment',10)
    },
    decrement () {
      store.commit('decrement')
    }
  },
  components: {
    add:add,
    display:display
  },
  store:store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
