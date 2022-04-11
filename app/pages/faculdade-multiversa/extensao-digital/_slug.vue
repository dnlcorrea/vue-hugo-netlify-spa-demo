<template>
  <TemplateCurso
    :curso="curso"
    :cursos="cursos"
    :style="isLoaded ? 'opacity:1' : 'opacity:0'"
    :check-class="checkClass"
    :isup="isup"
    :on-footer="onFooter"
    tipo="extensao-digital"
  >
  </TemplateCurso>
</template>
<script>
import cursos from '@/data/cursos-turismo.js'

export default {
  data() {
    return {
      cursos: [],
      curso: {},
      isLoaded: false,
      checkClass: 'extensao-digital',
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
      vm.setCurso(to.params.slug)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.setCurso(to.params.slug)
    next()
  },
  methods: {
    setCurso(to) {
      this.curso = cursos.find((c) => c.slug === to)
        ? cursos.find((c) => c.slug === to)
        : open('/404', '_self')

      this.cursos = cursos.filter((c) => c.slug !== to)
        ? cursos.find((c) => c.slug !== to)
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
      this.setCurso(path)
    }, 500)
  },
}
</script>
<style lang='scss'>
</style>