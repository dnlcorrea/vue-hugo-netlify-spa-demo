<template>
  <v-layout
    class="
      wrap
      grey
      lighten-3
      spy-15
      fill-width
      align-center
      justify-center
      mb-4
    "
    id="contato"
  >
    <v-flex
      xs8
      md4
      xl3
      class="d-flex align-center justify-center spt-xs-15 spb-xs-5"
    >
      <div class="spb-10">
        <h1 class="c-secondary--text font-100 special-font mb-3">
          <big>
            <big>
              TIRE SUAS <br class="hidden-sm-and-down" />
              DÚVIDAS
            </big>
          </big>
        </h1>

        <PortalTurismoFaleConoscoBtn
          titulo="FALE CONOSCO"
          :curso="curso ? curso : ''"
        ></PortalTurismoFaleConoscoBtn>
      </div>
    </v-flex>

    <v-flex xs10 md3 xl2 class="spb-xs-15">
      <v-img :src="$imagine('/portal-turismo/contato.png')"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['curso'],
  components: {},
}
</script>

<style>
</style>