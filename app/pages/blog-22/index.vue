<template>
  <div class="white pt-3">
    <a href="/blog-22" class="no-underline">
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
        <h1 class="my-0 c-secondary--text" v-if="imageLoaded">
          <big>BLOG&nbsp;</big>
        </h1>
        <div>
          <v-img
            @load="imageLoaded = true"
            contain
            style="width: 170px"
            src="/logo.png"
          ></v-img>
        </div>
      </v-layout>
    </a>
    <v-layout class="spt-20 spl-24 spl-xs-20 spr-20 flex-wrap">
      <v-flex xs12 md3 lg2 class="mt-2 font-800">
        <BlogCategorias
          contexto="blog-22"
          :categorias="categoriasBlog"
        ></BlogCategorias>
      </v-flex>
      <v-flex xs12 md9 lg10>
        <v-layout class="flex-wrap spb-24">
          <v-flex
            xs12
            md4
            xl3
            sm6
            class="spx-4 spy-4"
            v-for="(blog, i) in blogs"
            :key="i"
          >
            <BlogCard :blog="blog" contexto="blog-22"></BlogCard>
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
  data() {
    return {
      categoria: '',
      imageLoaded: false,
    }
  },
  computed: {
    categoriasBlog() {
      let categorias = this.blogs.map((n) => n.categoria).flat()
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
    blogs() {
      let blogs = []

      blog.forEach((element) => {
        if (!element.categoria.find((c) => c.slug === 'noticia')) {
          blogs.push(element)
        }
      })
      return blogs
    },
  },
}
</script>
<style lang='scss'>
</style>