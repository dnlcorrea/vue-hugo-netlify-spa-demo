<template>
  <v-layout
    class="banner-portal-turismo-show align-center flex-wrap"
    :style="{ background: setImage() }"
  >
    <v-flex
      xs12
      sm10
      md8
      lg6
      class="white--text spx-24 smx-24 smx-xs-0"
      style="z-index: 0"
    >
      <div class="spx-24">
        <p class="mb-2">
          {{ categoria }}
        </p>
        <div class="special-font uppercase titulo-banner line-height-1 mb-2">
          {{ titulo }}
        </div>
        <p class="white--text font-500">
          <span class="border-padrao px-2 py-1"
            >Duração: {{ duracao }} meses</span
          >
          <span class="border-padrao c-primary--text px-2 py-1" v-if="inicio"
            >Início: {{ inicio }}</span
          >
          <span class="border-padrao c-primary--text px-2 py-1" v-else
            >Em breve!</span
          >
        </p>
        <fale-conosco-btn-vue
          large
          :texto="`<clr-icon shape='bolt' class='is-solid mr-1'></clr-icon> INSCREVA-SE JÁ`"
          titulo="INSCREVA-SE"
          :curso="titulo"
          :redirect="inscricao"
        ></fale-conosco-btn-vue>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import FaleConoscoBtnVue from '../FaleConoscoBtn.vue'
export default {
  components: {
    FaleConoscoBtnVue,
  },
  props: ['inscricao', 'titulo', 'duracao', 'imagem', 'categoria', 'inicio'],
  methods: {
    setImage() {
      let lg =
        this.categoria === 'Pós-graduação'
          ? ''
          : 'linear-gradient(334deg, #2d386deb, #010208cf),'

      let img = this.imagem ? this.imagem : '/portal-turismo/banner.jpg'

      return ` ${lg} url(${img}) center center / cover`
    },
  },
}
</script>
<style lang="scss">
.banner-portal-turismo-show {
  height: 60vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  padding-top: 64px;

  &:before {
    content: '';
    width: 82vw;
    height: 82vw;
    background: #2d386dbf;
    border-radius: 100%;
    position: absolute;
    z-index: 0;
    top: -25vw;
    left: -30vw;
    animation: left 1.5s;
  }
  @media (max-width: 1024px) {
    height: 50vh;

    &:before {
      width: 110vw;
      height: 110vw;
    }
  }
  @media (max-width: 768px) {
    height: 50vh;

    &:before {
      width: 110vw;
      height: 110vw;
    }
  }
  @media (max-width: 500px) {
    height: 70vh;
    padding-top: 0px;

    &:before {
      width: 160vw;
      height: 160vw;
    }
  }

  clr-icon {
    width: 18px;
    height: 18px;
  }
}
</style>