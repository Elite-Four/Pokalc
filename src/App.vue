<template lang="pug">
#app
  nav
    router-link(to="/overall") Overall Calculator
    router-view
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="sass">
$primary: #ee1515 // The primary color of Pokeball
// $text: #f0f0f0 // The secondary color of bottom of Pokeball

@import 'bulma'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
