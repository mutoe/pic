<template lang="pug">

.page
  header header
  .body body
  footer footer

</template>

<script>
export default {
  data () {
    return {
      title: 'this is home page.',
    }
  },
}
</script>

<style lang="stylus" scoped>

.page
  background-color $color-background

</style>
