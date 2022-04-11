<template>
  <v-layout class="spx-sm-24 spx-xs-15 white spt-10 flex-wrap">
    <v-flex xs12 class="spl-lg-13">
      <BlogCarouselBlog
        :blogs="blogs"
        contexto="blog-multiversa"
      ></BlogCarouselBlog>
    </v-flex>
  </v-layout>
</template>

<script>
import blog from '@/data/blog.js'

export default {
  computed: {
    blogs() {
      let blogs = []

      blog.forEach((element) => {
        // if (!element.categoria.find((c) => c.slug === 'noticia')) {
        blogs.push(element)
        // }
      })
      return blogs.slice(0, 4)
    },
    // noticias() {
    //   return blog
    //     .filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
    //     .slice(0, 2)
    // },
  },
}
</script>

<style>
</style>