<template lang="pug">
.page this is home page
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="stylus" scoped>

.page
  background-color $color-background-base

.el-row
  margin 12px

  .el-col
    border-radius $border-radius-base
    height 36px

    &:nth-child(even)
      background: #d3dce6
    &:nth-child(odd)
      background: lighten(#d3dce6, 30%)

</style>
