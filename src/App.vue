<template>
  <div id="app">
    <p>{{ name }}</p>
    <input type="text" name="name" @input='setName' :value='name'>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import store from './stores/MainStore'
export default {
  computed: {
    name () {
      return store.state.name
    }
  },
  methods: {
    setName (event) {
      this.$store.commit('setName', event.target.value)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
