<template>
  <div class="spb-24 spx-24">
    <div class="mb-5 subtitulo c-secondary--text spx-24">
      <span class="main-title">PARCEIROS</span>
    </div>

    <v-layout class="align-center flex-wrap spx-24">
      <v-flex xs6 sm4 md3 lg3 v-for="(parceiro, i) in parceiros" :key="i">
        <a :href="parceiro.url" target="_blank" style="display: block">
          <object
            style="pointer-events: none; max-width: 250px"
            :data="'/portal-turismo/parceiros/' + parceiro.img"
            type="image/svg+xml"
          ></object>
        </a>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parceiros: [
        {
          url: 'https://uniamerica.br/supernova',
          img: 'logo-supernova.svg',
        },
        {
          url: 'https://www.hackatour.com/',
          img: 'logo-hackatur.svg',
        },
        {
          url: 'https://idestur.com/',
          img: 'logo-idestur.svg',
        },
        {
          url: 'https://festivaldascataratas.com/',
          img: 'logo-festival.svg',
        },
        {
          url: 'https://www.desbravador.com.br/',
          img: 'logo-desbravador.svg',
        },
        {
          url: 'https://www.grupocataratas.com/',
          img: 'logo-cataratas.svg',
        },
        {
          url: 'https://poloiguassu.org/',
          img: 'logo-polo-iguassu.svg',
        },
      ],
    }
  },
}
</script>
<style lang='scss'>
</style>