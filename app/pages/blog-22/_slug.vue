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
            src="/22-logo.png"
          ></v-img>
        </div>
      </v-layout>
    </a>
    <v-layout class="spa-24 spx-xs-10 flex-wrap">
      <v-flex xs12 md9 class="spx-24 spx-xs-0">
        <div v-if="texto.categoria">
          {{ DateTime.fromISO(texto.published_at).toFormat('dd.MM.y') }}
          <v-chip
            small
            class="no-underline grey lighten-4 px-3 mr-2 my-1"
            :to="`/blog-22/categoria/${cat.slug}`"
            v-for="(cat, i) in texto.categoria.filter(
              (c) => c.nome !== 'Notícia'
            )"
            :key="i"
            >{{ cat.nome }}</v-chip
          >
        </div>
        <h1 class="my-1 c-secondary--text">{{ texto.titulo }}</h1>
        <h3 class="font-500 my-1">
          <i>{{ texto.subtitulo }}</i>
        </h3>
        <div class="pa-1 my-10" style="box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)">
          <v-img aspect-ratio="1.7" :src="texto.imagem"></v-img>
        </div>
        <div v-html="texto.texto"></div>
        <div class="mt-5 smb-24">
          <v-layout
            class="align-center"
            v-for="(autor, i) in texto.autores"
            :key="i"
          >
            <v-avatar
              :src="autor.imagem"
              size="45"
              class="mr-2 c-primary-darken-1--text"
              style="border: 2px solid currentColor"
            >
              <img :src="autor.imagem" :alt="autor.nome" />
            </v-avatar>
            <div class="">
              <p class="font-600 my-0">{{ autor.nome }}</p>
              <p class="my-0 line-height-1">
                <small>{{ autor.minibio }}</small>
              </p>
            </div>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 md3
        ><h2 class="font-400 spt-18 spt-xs-0 spr-24 spr-xs-0 c-secondary--text">
          Mais Artigos
        </h2>
        <div class="spy-4 spr-24 spr-xs-0" v-for="(blog, i) in blogs" :key="i">
          <BlogCard :blog="blog" contexto="blog-22" sem-foto></BlogCard>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import blog from '@/data/blog.js'
const { DateTime } = require('luxon')
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.inicializarTexto(to)
      vm.getBlogs(to)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.inicializarTexto(to)
    this.getBlogs(to)
    next()
  },

  data() {
    return { DateTime, texto: {}, imageLoaded: false, blogs: [] }
  },
  methods: {
    inicializarTexto(to) {
      let slug = to.params.slug

      this.texto = blog.find((a) => a.slug === slug)
    },
    getBlogs(to) {
      let slug = to.params.slug

      this.blogs = blog
        .filter(
          (a) =>
            a.slug !== slug && !a.categoria.find((c) => c.slug === 'noticia')
        )
        .slice(0, 3)
    },
  },
}
</script>
<style lang='scss'>
</style>