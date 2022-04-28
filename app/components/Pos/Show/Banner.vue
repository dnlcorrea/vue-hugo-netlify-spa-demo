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
      class="white--text spl-xs-24 spl-sm-24 spl-md-0 spl-lg-24 smx-xs-0"
      style="z-index: 0"
    >
      <div class="spx-24 sml-24 spx-xs-0 sml-xs-0 animate">
        <p class="mb-2">
          {{ categoria }}
        </p>
        <div class="special-font uppercase titulo-banner line-height-1 mb-2">
          {{ titulo }}
        </div>

        <v-btn
          v-if="inscricao"
          class="c-primary c-secondary--text mx-auto"
          :href="inscricao"
          target="_blank"
          ><clr-icon shape="bolt" class="is-solid mr-1"></clr-icon> INSCREVA-SE
          JÁ
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['inscricao', 'titulo', 'imagem', 'categoria'],
  methods: {
    setImage() {
      let img = this.imagem ? this.imagem : '/portal-turismo/banner.jpg'

      let size = this.$sc.desktopAndUp ? '55%' : 'contain'
      return `url(${img}) center right / ${size} no-repeat, #171f3a`
    },
  },
}
</script>
<style lang="scss">
.banner-portal-turismo-show {
  position: relative;
  overflow: hidden;
  padding-top: 64px;
  backdrop-filter: blur(10px);

  .animate {
    animation: enter 1s;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: url('/grafismo3.png') center / cover no-repeat, #222b4a;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0vw;
    opacity: 0.9;
  }
  @media (min-width: 1024px) {
    height: 35vh;
    min-height: 450px;

    &:after {
      content: '';
      background: url('/grafismo3.png') center / 30vw no-repeat;
      left: 15vw;
      opacity: 1;
    }
    &:before {
      content: '';
      width: 51vw;
      height: 100%;
      background: #171f3a;
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
    }
  }
  @media (min-width: 1280px) {
    height: 60vh;
    min-height: 600px;
    &:after {
      background: url('/grafismo3.png') center / 26vw no-repeat;
      left: 13vw;
    }
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 500px) {
    height: 70vh;
    padding-top: 0px;
  }

  clr-icon {
    width: 18px;
    height: 18px;
  }
}
</style>