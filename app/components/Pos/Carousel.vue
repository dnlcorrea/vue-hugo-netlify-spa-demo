<template>
  <div
    class="spb-24 flick relative"
    v-if="itemsCount > 1"
    :class="{ 'loading-padrao': !loaded }"
  >
    <h1
      class="font-500 main-title subtitulo"
      :class="subtitulo ? 'smb-4' : 'smb-8'"
      v-if="titulo"
    >
      {{ titulo }}
    </h1>
    <p class="c-info-darken-2--text text-left mb-8" v-if="subtitulo">
      {{ subtitulo }}
    </p>
    <v-layout
      class="flex-wrap"
      :class="`flickity-mobile-${id}`"
      :style="{ opacity: loaded ? 1 : 0 }"
      style="
        margin-left: calc(-8px - 0.4vw) !important;
        margin-right: calc(-8px - 0.4vw) !important;
      "
    >
      <v-flex
        xs12
        md6
        lg4
        xl3
        class="spx-4 spb-5"
        :class="{ 'spb-10': !doFlick && ableToFlick }"
        v-for="(p, i) in cursos"
        :key="i"
      >
        <!-- :class="{ 'carousel-cell': doFlick && ableToFlick }" -->
        <router-link
          :to="`/faculdade-multiversa/${tipo}/${p.slug}`"
          class="no-underline fill-height"
        >
          <v-card class="fill-height mb-2">
            <div class="c-primary" style="height: 5px"></div>

            <v-img
              :src="p.img"
              aspect-ratio="1.5"
              class="grey lighten-2"
              :lazy-src="$imagine('/placeholder-2.jpg')"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div
              class="c-primary spx-3 ml-3"
              style="z-index: 2; position: absolute; top: 0"
            >
              <p class="c-secondary--text mb-0 mt-1 text-center">INÍCIO</p>
              <p class="c-secondary--text mb-0 line-height-1 text-center">
                <big
                  class="font-900 line-height-1"
                  style="font-size: 50px"
                  v-if="p.data_inicio"
                  >{{ p.data_inicio }}</big
                >
              </p>
              <p
                class="
                  c-secondary--text
                  mb-1
                  line-height-1
                  text-center text-uppercase
                "
              >
                <big class="font-900" v-if="p.mes_inicio">{{
                  p.mes_inicio.slice(0, 3)
                }}</big
                ><big class="font-900" v-else>a definir</big
                ><big class="font-900" v-if="p.ano_inicio"
                  >/{{ p.ano_inicio.slice(2, 4) }}</big
                >
              </p>
            </div>
            <v-card-text class="spl-3 spy-5">
              <!-- <div class="c-primary" style="height: 5px"></div> -->
              <h2 class="pt-1 mb-2 c-secondary--text line-height-1-2 font-600">
                {{ p.name }}
              </h2>

              <p>{{ strip(p.descricao) | truncate(115) }}</p>
              <v-layout class="justify-space-between">
                <div v-if="p.duracao">
                  <i class="fas fa-clock mr-2 c-info-darken-1--text"></i
                  >Duração: {{ p.duracao }} meses
                </div>
                <div v-else>
                  <i class="fas fa-clock mr-2 c-info-darken-1--text"></i
                  >Duração: a definir
                </div>
                <v-btn depressed small class="smr-3 c-primary c-secondary--text"
                  ><span class="font-600">SAIBA MAIS</span
                  ><i class="fas fa-arrow-right ml-2"></i
                ></v-btn>
              </v-layout>
            </v-card-text>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import flick from '@/mixins/Flickity.js'
var striptags = require('striptags')

export default {
  props: {
    cursos: Array,
    titulo: String,
    doFlick: Boolean,
    tipo: String,
    subtitulo: String,
  },
  mixins: [flick],

  computed: {
    itemsCount() {
      return this.cursos.length
    },
  },
  methods: {
    strip: (text) => striptags(text),
  },
}
</script>

<style lang="scss">
// .carousel-cell:not(.is-selected) {
//   opacity: 0.3;
// }
// .carousel-cell {
//   transition: opacity 0.5s;
// }
</style>