<template lang="pug">

.page
  el-row
    el-col(:span='24')

  el-row
    el-col(:span='12', v-for='(item, index) in new Array(2)', :key='index')

  el-row
    el-col(:span='8', v-for='(item, index) in new Array(3)', :key='index')

  el-row
    el-col(:span='6', v-for='(item, index) in new Array(4)', :key='index')

  el-row
    el-col(:span='4', v-for='(item, index) in new Array(6)', :key='index')

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
