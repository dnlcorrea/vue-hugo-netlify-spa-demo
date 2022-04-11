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
      txt1="EXTENSÃO"
      txt2="DIGITAL"
      img="/extensao-digital.jpg"
      height="calc(60vh + 50px)"
      ref="banner"
    ></Banner>
    <div class="spt-24 spx-24">
      <PosCarousel :cursos="cursos" tipo="extensao-digital"></PosCarousel>
    </div>
  </div>
</template>

<script>
import cursos from '@/data/cursos-turismo.js'

export default {
  data() {
    return {
      banner: {},
      cursos,
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
    }, 900)
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

