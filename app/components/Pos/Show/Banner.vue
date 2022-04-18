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
      class="white--text spl-24 smx-xs-0"
      style="z-index: 0"
    >
      <div class="spx-24 sml-24 animate">
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
      // let lg = 'linear-gradient(-90deg, #01092e00,#01092e),'

      let img = this.imagem ? this.imagem : '/portal-turismo/banner.jpg'

      return `#2d386d url(${img}) center right / 70% no-repeat`
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
  backdrop-filter: blur(10px);

  .animate {
    animation: enter 1s;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -90deg,
      rgb(124 102 0 / 36%),
      rgb(17 27 74 / 72%),
      #2d386d
    );
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:before {
    content: '';
    width: 82vw;
    height: 82vw;
    background: linear-gradient(-190deg, #1c244ac3, #2c3c8b99);
    border-radius: 100%;
    position: absolute;
    z-index: 0;
    top: -25vw;
    left: -25vw;
    animation: left 1s;
    backdrop-filter: blur(10px);
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