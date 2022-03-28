<template>
  <div>
    <v-layout class="flex-wrap align-center justify-space-between smb-9 smt-15">
      <h1 class="font-500 smy-0 main-title">Blog Multiversa</h1>
      <v-btn to="/blog-22" outlined small class="my-0 c-primary--text"
        ><span class="c-secondary--text">VER TUDO</span></v-btn
      >
    </v-layout>
    <v-layout
      style="margin: 0 calc(-8px - 0.4vw) !important"
      :class="`flickity-mobile-${id}`"
      class="flex-wrap"
    >
      <v-flex xs12 md6 class="spx-4" v-for="(blog, i) in blogs" :key="i">
        <BlogCard :blog="blog"></BlogCard>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import flick from '@/mixins/Flickity.js'
export default {
  mixins: [flick],
  props: ['blogs'],
}
</script>

<style>
</style>