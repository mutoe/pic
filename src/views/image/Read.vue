<template lang="pug">

.page {{ imageId }}

</template>

<script>
export default {
  data () {
    return {
      imageId: this.$route.params.id,
      image: {},
    }
  },
  created () {
    this.fetchInfo()
  },
  methods: {
    fetchInfo () {
      this.$http.get(`/api/image/${this.imageId}`)
        .then(res => {
          this.image = res.data.image
        })
        .catch(err => console.warn(err))
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
