<template>
  <div>
    这是data组件
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'Data',
  components: {
    Footer: () => import('../Footer.vue')
  }
}
</script>

<style lang="stylus">

</style>
