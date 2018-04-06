<template lang="pug">

.page # {{ imageId }}
  ul
    li(v-for='image in detail.list')
      p {{ image }}
      img(:src='"/uploads/images/" + image.filename')

</template>

<script>
export default {
  data () {
    return {
      imageId: this.$route.params.id,
      detail: {},
    }
  },
  created () {
    this.fetchInfo()
  },
  methods: {
    fetchInfo () {
      this.$http.get(`/api/image/${this.imageId}`)
        .then(res => {
          this.detail = res.data.image
        })
        .catch(err => console.warn(err))
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
