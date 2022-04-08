<template>
  <div class="spb-24 smx-24">
    <div class="mb-5 subtitulo c-secondary--text spx-24">
      <span class="main-title">Parceiros</span>
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
  props: ['parceiros'],
}
</script>
<style lang='scss'>
</style>