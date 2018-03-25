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
