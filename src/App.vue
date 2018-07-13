<template>
  <div id="app">
    <!-- llamar el router-view para q se carguen los componentes, si no las estamos llamando a ningún lugar -->
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  // declarar los componentes que se utilizan dentro de este Vue file
  components: {
    Main
  }
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
