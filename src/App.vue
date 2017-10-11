<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import PokemonSelector from './components/PokemonSelector'

import store from './store'

export default {
  name: 'app',
  components: {
    Hello,
    PokemonSelector
  },
  store
}
</script>
