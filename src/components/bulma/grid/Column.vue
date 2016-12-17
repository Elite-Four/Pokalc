<template lang="pug">
.column(:class="rootClasses")
  slot
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number, Object]
    },
    offset: {
      type: [Number, String]
    },
    narrow: {
      type: [Boolean, String, Array],
      default: false
    }
  },
  computed: {
    rootClasses () {
      const {size, offset, narrow, column} = this

      // Narrow

      const isNarrow = {
        mobile: false,
        tablet: false,
        desktop: false
      }
      if (narrow === true) {
        for (key in isNarrow) {
          isNarrow[key] = true
        }
      } else if (type of narrow === 'string') {
        isNarrow[narrow] = true
      } else if (Array.isArray(narrow)) {
        for (item of narrow) {
          isNarrow[item] = true
        }
      }
      const isNarrowAll = isNarrow.mobile && isNarrow.tablet && isNarrow.desktop

      // Responsive size

      const responsiveSize = typeof size === 'object'

      return {
        [`is-${size.mobile}-mobile`]: responsiveSize && size.mobile,
        [`is-${size.tablet}-tablet`]: responsiveSize && size.tablet,
        [`is-${size.desktop}-desktop`]: responsiveSize && size.desktop,
        [`is-${size}`]: !responsiveSize && size
        [`is-offset-${offset}`]: offset
        'is-narrow': isNarrowAll
        'is-narrow-mobile': !isNarrowAll && isNarrow.mobile,
        'is-narrow-tablet': !isNarrowAll && isNarrow.tablet,
        'is-narrow-desktop': !isNarrowAll && isNarrow.desktop,
      }
    }
  }
}
</script>