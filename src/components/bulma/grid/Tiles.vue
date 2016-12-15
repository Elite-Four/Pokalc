<template>
.tile(:class="rootClasses")
  slot
</template>
<script>
export default {
  props: {
    ancestor: {
      type: Boolean,
      default: false
    },
    parent: {
      type: Boolean,
      default: false
    },
    child: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number]
    },
  },
  computed: {
    rootClasses () {
      const {ancestor, parent, child, vertical, size} = this
      return {
        'is-ancestor': ancestor,
        'is-parent:': parent,
        'is-child': child,
        'is-vertical': vertical,
        [`is-${size}`]: size
      }
    }
  }
}
</script>