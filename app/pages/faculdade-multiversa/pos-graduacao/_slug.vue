<template>
  <TemplateCurso
    :curso="curso"
    :cursos="cursos"
    :style="isLoaded ? 'opacity:1' : 'opacity:0'"
    :check-class="checkClass"
    :isup="isup"
    :on-footer="onFooter"
  >
  </TemplateCurso>
</template>
<script>
import pos from '@/data/pos.js'

export default {
  data() {
    return {
      cursos: [],
      curso: {},
      isLoaded: false,
      checkClass: 'pos-graduacao',
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.setPos(to.params.slug)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.setPos(to.params.slug)
    next()
  },
  methods: {
    setPos(to) {
      this.curso = pos.find((c) => c.slug === to)
        ? pos.find((c) => c.slug === to)
        : open('/404', '_self')

      this.cursos = pos.filter((c) => c.slug !== to)
        ? pos.find((c) => c.slug !== to)
        : open('/404', '_self')

      this.isLoaded = true
    },
  },
  // computed: {
  //   checkClass: (v) =>
  //     v.$route.query.type === 'pos' ? 'pos' : 'cursos-online',
  // },
  mounted() {
    let path = location.pathname.split('/')[3]

    setTimeout(() => {
      this.setPos(path)
    }, 500)
  },
}
</script>
<style lang='scss'>
</style>