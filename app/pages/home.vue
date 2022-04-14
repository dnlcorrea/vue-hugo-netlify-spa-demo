<template>
  <div>
    <Banner
      txt1="APRENDIZAGEM"
      txt1-color="c-secondary"
      txt2="EVOLUTIVA"
      txt2-color="c-primary"
      margin-top="calc(-7vw - 120px)"
      img="/banners/banner-home2.jpg"
      height="calc(100vh + 50px)"
      font-size="calc(60px + 3vw)"
    >
      <v-img
        src="/logo-s-g.png"
        class="mt-5 ml-3"
        width="calc(50px + 10vw)"
      ></v-img>
    </Banner>

    <HomeProdutos></HomeProdutos>
    <BlogSectionBlogNoticia class="spb-20"></BlogSectionBlogNoticia>

    <HomeContato></HomeContato>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
</style>

