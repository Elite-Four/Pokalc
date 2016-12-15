<template lang="pug">
.container(:class="rootClasses")
  slot
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClasses () {
      return {
        'is-fluid': this.fluid
      }
    }
  }
}
</script>