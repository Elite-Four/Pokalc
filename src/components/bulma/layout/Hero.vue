<template lang="pug">
.hero(:class="rootClasses")
  .hero-head
    slot(name="head")
  .hero-body
    slot
  .hero-foot
    slot(name="foot")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    fullheight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClasses () {
      const {type, size, fullheight} = this
      const ret = {
        [`is-${type}`]: type,
        [`is-${size}`]: size,
        ['is-fullheight']: fullheight
      }
    }
  }
}
</script>