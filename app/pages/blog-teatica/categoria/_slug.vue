<template>
  <div class="white pt-3">
    <v-layout
      class="
        align-center
        fill-height
        justify-center
        c-info-lighten-1
        spt-24
        spb-8
      "
    >
      <h1 class="my-0" v-if="imageLoaded"><big>BLOG&nbsp;</big></h1>
      <div>
        <v-img
          @load="imageLoaded = true"
          contain
          style="width: 170px"
          src="/teatica-logo.png"
        ></v-img>
      </div>
    </v-layout>
    <BlogCategoriaNome
      :blog="blogs"
      contexto="blog-teatica"
    ></BlogCategoriaNome>
    <v-layout class="spt-20 spl-24 spr-20">
      <v-flex xs12 md3 lg2 class="mt-2 font-800">
        <BlogCategorias
          contexto="blog-teatica"
          :categorias="categoriasBlog"
        ></BlogCategorias>
      </v-flex>
      <v-flex xs12 md9 lg10>
        <v-layout class="flex-wrap spx-20 spb-24">
          <v-flex
            xs12
            md4
            xl3
            class="spx-4 spy-4"
            v-for="(blog, i) in blogs"
            :key="i"
          >
            <BlogCard :blog="blog" contexto="blog-teatica"></BlogCard>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <br />
    <br />
  </div>
</template>
<script>
import blog from '@/data/blog.js'

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.inicializarPorCategoria(to)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.inicializarPorCategoria(to)
    next()
  },

  data() {
    return {
      categoria: '',
      imageLoaded: false,
      blogs: [],
    }
  },
  methods: {
    inicializarPorCategoria(to) {
      this.categoria = to.params.slug
      this.blogs = []
      this.blogs = blog.filter(
        (a) =>
          !a.categoria.find((c) => c.slug === 'noticia') &&
          a.categoria.find((c) => c.slug === this.categoria)
      )
    },
  },

  computed: {
    categoriasBlog() {
      let blogs = blog.filter(
        (a) => !a.categoria.find((c) => c.slug === 'noticia')
      )
      let categorias = blogs.map((n) => n.categoria).flat()
      let flated = [...new Set(categorias.map((c) => c.nome))]
      let final = []
      flated.forEach((element) => {
        categorias.find((c) => {
          if (
            c.nome === element &&
            !final.map((m) => m.nome).includes(element)
          ) {
            final.push(c)
          }
        })
      })
      return final
    },
  },
}
</script>
<style lang='scss'>
</style>