<template>
  <div class="white">
    <div slot="submenu" class="fill-with">
      <FaculdadeSubmenu
        :isup="isup"
        :onFooter="onFooter"
        :banner="banner"
        class="hidden-md-and-down"
      ></FaculdadeSubmenu>
    </div>
    <Banner
      txt1="GRADUAÇÃO"
      txt2="DIGITAL"
      img="/pos-graduacao.jpg"
      height="calc(60vh + 50px)"
      ref="banner"
    ></Banner>
    <div class="spx-sm-24 spx-xs-15 spb-24">
      <CarouselEmBreve titulo="Graduação Digital"></CarouselEmBreve>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: {},
    }
  },
  computed: {
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
  },
  mounted() {
    setTimeout(() => {
      this.banner = this.$refs.banner
    }, 500)
  },
}
</script>

<style lang="scss">
.submenu {
  .v-btn {
    font-size: 13px;
  }
}
</style>

