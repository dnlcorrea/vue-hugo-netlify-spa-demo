<template>
  <div class="white pt-3">
    <div
      class="
        d-sm-flex d-xs-block
        align-center
        fill-height
        justify-center
        c-info-lighten-1
        spt-24
        spb-8
      "
    >
      <h1 class="my-0 mx-auto text-center"><big>ACONTECE NA&nbsp;</big></h1>
      <div>
        <v-img
          contain
          class="mx-auto"
          style="width: 170px"
          src="/teatica-logo.png"
        ></v-img>
      </div>
    </div>
    <v-layout class="spt-20 spl-24 spr-20 flex-wrap">
      <v-flex xs12 md3 lg2 class="mt-2 font-800">
        <BlogCategorias
          contexto="acontece-na-teatica"
          :categorias="categoriasNoticias"
        ></BlogCategorias>
      </v-flex>
      <v-flex xs12 md9 lg10>
        <v-layout class="flex-wrap spb-24">
          <v-flex
            xs12
            md4
            xl3
            class="spx-4 spy-4"
            v-for="(noticia, i) in noticias"
            :key="i"
          >
            <BlogCard :blog="noticia" contexto="acontece-na-teatica"></BlogCard>
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
  computed: {
    noticias() {
      return blog.filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
    },
    categoriasNoticias() {
      let noticias = blog.filter((a) =>
        a.categoria.find((c) => c.slug === 'noticia')
      )
      let categorias = noticias.map((n) => n.categoria).flat()
      let flated = [...new Set(categorias.map((c) => c.nome))]
      let final = []
      flated.forEach((element) => {
        if (element !== 'Notícia') {
          categorias.find((c) => {
            if (
              c.nome === element &&
              !final.map((m) => m.nome).includes(element)
            ) {
              final.push(c)
            }
          })
        }
      })
      return final
    },
  },
}
</script>
<style lang='scss'>
</style>