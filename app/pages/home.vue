<template>
  <div>
    <Banner
      txt1="APRENDIZAGEM"
      txt1-color="c-secondary"
      txt2="EVOLUTIVA"
      txt2-color="c-primary"
      :margin-top="$sc.isCell ? '-29vh' : '-19vh'"
      hasMobileImg
      img="/banners/home.jpg"
      height="calc(100vh + 50px)"
      :font-size="sc.tabletAndDown ? 'calc(18px + 7vw)' : 'calc(23px + 4vw)'"
      class="full-banner"
    >
      <v-img
        :src="$imagine('/logo-s-g.png')"
        class="smt-5 ml-3"
        width="calc(50px + 10vw)"
      ></v-img>
    </Banner>

    <HomeProdutos></HomeProdutos>
    <BlogSectionBlogNoticia class="spb-20"></BlogSectionBlogNoticia>

    <HomeContato></HomeContato>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sc: this.$sc,
    }
  },
}
</script>

<style lang="scss">
</style>

