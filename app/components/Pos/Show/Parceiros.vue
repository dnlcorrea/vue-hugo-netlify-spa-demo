<template>
  <div class="spb-24 smx-24">
    <div class="mb-5 subtitulo c-secondary--text spx-24">
      <span class="main-title">Parceiros</span>
    </div>

    <v-layout class="align-center flex-wrap spx-24">
      <v-flex xs6 sm4 md3 lg3 xl2 v-for="(parceiro, i) in parceiros" :key="i">
        <a :href="parceiro.url" target="_blank" style="display: block">
          <v-img
            style="pointer-events: none; max-width: 200px"
            :src="'/parceiros/' + parceiro.img"
          ></v-img>
        </a>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ['parceiros'],
}
</script>
<style lang='scss'>
</style>