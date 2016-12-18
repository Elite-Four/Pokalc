<template lang="pug">
.section
  .columns.is-multiline
    .column
      .control
        input.input(placeholder="Level", v-model="level")
    .column
      .control
        input.input(placeholder="Base Stat", v-model="base")
    .column
      .control
        input.input(placeholder="Effort Value", v-model="effort")
    .column
      .control
        input.input(placeholder="Individual Value", v-model="individual")
  .columns
    .column
      span overall
      span(v-text="overall")
</template>

<script>
export default {
  data () {
    return {
      level: 50,
      base: 60,
      individual: 31,
      effort: 252
    }
  },
  computed: {
    overall () {
      const {base, effort, level, individual} = this
      // （（种族值×2＋基础点数÷4＋个体值）×等级÷100＋5）×性格修正
      return (base * 2 + effort / 4 + individual) * level / 100 + 5
    }
  }
}
</script>