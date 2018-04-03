<template lang='pug'>

#app
  el-container(direction='vertical')
    v-header(:page='page')

    el-main
      transition(:name='transitionName', mode='out-in')
        router-view.child-view

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
  data () {
    return {
      transitionName: 'fade',
    }
  },
  computed: {
    page: function () {
      return this.$route.name.toLowerCase()
    },
  },
  watch: {
    // 根据页面层级使用不同的过渡动画
    // https://github.com/vuejs/vue-router/blob/9e640e6174dda35effb6a55b898669a7ea8a71c5/examples/transitions/app.js#L22
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      let depth = toDepth - fromDepth
      if (depth === 0) this.transitionName = 'fade'
      if (depth < 0) this.transitionName = 'slide-right'
      if (depth > 0) this.transitionName = 'slide-left'
    },
  },
}
</script>

<style lang="stylus">
// 让页脚沉底
html
body
#app
.el-container
  height 100%

body
  overflow-y scroll

#app
  header
  footer
    flex 0 0 auto

  .el-main
    flex 1 0 auto
    overflow-x hidden
    transition all 0.3s
    padding 0

.child-view
  position relative
  margin 24px 0
  width 100%
  transition all 0.2s ease-out

.slide-left-enter
.slide-right-leave-active
  opacity 0
  transform translate(100px, 0)

.slide-right-enter
.slide-left-leave-active
  opacity 0
  transform translate(-100px, 0)

.fade-enter
.fade-leave-active
  opacity 0
  transform translate(0, -20px)

</style>
