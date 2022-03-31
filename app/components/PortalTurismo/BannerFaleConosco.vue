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
      md3
      xl2
      class="d-flex align-center justify-center spt-xs-15 spb-xs-5"
    >
      <div>
        <h2 class="secondary--text titulo-banner special-font line-height-1">
          <big>
            <big>
              TIRE SUAS <br class="hidden-sm-and-down" />
              DÚVIDAS
            </big>
          </big>
        </h2>

        <fale-conosco-btn-vue
          titulo="FALE CONOSCO"
          :redirect="
            curso
              ? `/turismo-e-hotelaria/${curso}/whatsapp`
              : '/turismo-e-hotelaria/home/whatsapp'
          "
        ></fale-conosco-btn-vue>
      </div>
    </v-flex>
    <v-flex
      xs8
      md3
      xl2
      class="d-flex align-center justify-center spt-xs-15 spb-xs-5"
    >
      <div>
        <p>
          <a
            href="https://wa.me/554521059009"
            target="_blank"
            class="c-info-darken-2--text"
          >
            <v-icon class="mr-2">fab fa-whatsapp</v-icon> +55 45 2105.9009
          </a>
        </p>
        <p>
          <a
            href="mailto:atendimento@uniamerica.br"
            target="_blank"
            class="c-info-darken-2--text"
          >
            <v-icon class="mr-2">fas fa-envelope</v-icon>
            atendimento@uniamerica.br
          </a>
        </p>
        <p>
          <a
            href="http://m.me/UniAmericaUA"
            target="_blank"
            class="c-info-darken-2--text"
          >
            <v-icon class="mr-2">fab fa-facebook-messenger</v-icon>
            /UniAmericaUA
          </a>
        </p>
      </div>
    </v-flex>
    <v-flex xs10 md3 xl2 class="spb-xs-15">
      <v-img src="/portal-turismo/contato.png"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import FaleConoscoBtnVue from './FaleConoscoBtn.vue'
export default {
  props: ['curso'],
  components: {
    FaleConoscoBtnVue,
  },
}
</script>

<style>
</style>