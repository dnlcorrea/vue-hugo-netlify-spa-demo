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
      txt1="PÓS"
      txt2="GRADUAÇÃO"
      img="/graduacao-digital.jpg"
      height="50vh"
      ref="banner"
    ></Banner>
    <div class="spx-sm-24 spx-xs-15 spt-24 spb-20">
      <PosCarousel :cursos="pos" tipo="pos-graduacao"></PosCarousel>
    </div>
  </div>
</template>

<script>
import pos from '@/data/pos.js'

export default {
  data() {
    return {
      banner: {},
      pos,
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

<style>
</style>