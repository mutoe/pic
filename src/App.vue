<template lang='pug'>

#app
  el-container(direction='vertical')
    v-header

    el-main
      router-view

    v-footer

</template>

<script>
import VHeader from './components/Header.vue'
import VFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
  },
}
</script>

<style lang="stylus">
// ÈÃÒ³½Å³Áµ×
html
body
#app
.el-container
  height 100%

header
footer
  flex 0 0 auto

.el-main
  flex 1 0 auto

</style>
