<template>
  <div>
    <h1 class="font-500 smt-20 main-title subtitulo">{{ titulo }}</h1>

    <v-layout
      class="flex-wrap align-center"
      :class="`flickity-mobile-${id}`"
      style="
        margin-left: calc(-8px - 0.4vw) !important;
        margin-right: calc(-8px - 0.4vw) !important;
      "
    >
      <v-flex xs12 md6 lg3 class="spx-4 pb-5" v-for="i in 4" :key="i">
        <v-card>
          <v-img
            :lazy-src="$imagine('/placeholder-2.jpg')"
            aspect-ratio="1.5"
            class="
              c-info-lighten-2
              d-flex
              align-center
              justify-center
              text-center
              c-info-darken-2--text
            "
          >
            <span class="spx-5" style="border: 1px solid #f9d428"
              >em breve</span
            ></v-img
          >
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import flick from '@/mixins/Flickity.js'
export default {
  mixins: [flick],
  props: ['titulo'],
}
</script>

<style>
</style>