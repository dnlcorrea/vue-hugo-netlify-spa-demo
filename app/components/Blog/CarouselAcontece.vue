<template>
  <div>
    <v-layout class="flex-wrap align-center justify-space-between smb-9 smt-15">
      <h1 class="font-500 smy-0 main-title">Acontece na 22</h1>
      <v-btn to="/acontece-na-22" small outlined class="my-0 c-primary--text"
        ><span class="c-secondary--text">VER TUDO</span></v-btn
      >
    </v-layout>
    <v-layout
      style="margin: 0 calc(-8px - 0.4vw) !important"
      :class="`flickity-mobile-${id}`"
      class="flex-wrap"
    >
      <v-flex xs12 md6 class="spx-4" v-for="(noticia, i) in noticias" :key="i">
        <BlogCard :blog="noticia"></BlogCard>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import flick from '@/mixins/Flickity.js'
export default {
  mixins: [flick],
  props: ['noticias'],
}
</script>

<style>
</style>