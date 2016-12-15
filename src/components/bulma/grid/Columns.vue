<template lang="pug">
.columns(:class="rootClasses")
  slot
</template>
<script>
export default {
  props: {
    multiline: {
      type: Boolean
      default: false
    },
    gapless: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClasses () {
      return {
        'is-multiline': multiline,
        'is-gapless': gapless
      }
    }
  }
}
</script>