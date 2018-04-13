<template lang="pug">

.page
  el-row.container
    el-col(:md='6', :sm='12', :xs='24'
        v-for='(image, index) in list', :key='index')
      div(style='padding: 15px;')
        el-card.card(:body-style=`{padding: '0px'}`)
          img.image(:src='$store.state.oss.uri + image.list[0].filename + "?x-oss-process=style/thumb"', @click='gotoDetail(image._id)')
          div(style='padding: 14px;')
            span {{ image.title }}

</template>

<script>
export default {
  data () {
    return {
      list: [],
    }
  },
  created () {
    this.fetchList()
  },
  methods: {
    fetchList () {
      this.$http.get('/api/image')
        .then(res => {
          this.list = res.data.images
        })
        .catch(err => {
          console.warn(err)
        })
    },
    gotoDetail (id) {
      this.$router.push({ name: 'ImageRead', params: { id } })
    },
  },
}
</script>

<style lang="stylus" scoped>

.page
  text-align center

.card
  width 100%
  height 200px
  cursor pointer

</style>
