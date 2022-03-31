<template>
  <div class="spy-24 grey lighten-3">
    <div class="mb-5 subtitulo c-secondary--text text-center">
      <span>CURSOS E DESENVOLVIMENTO</span>
    </div>

    <v-layout class="justify-center flex-wrap diferenciais-flickity">
      <v-flex
        data-aos="flip-left"
        data-aos-offset="100"
        data-aos-delay="200"
        xs12
        md3
        xl2
        class="text-center special-font c-secondary--text subtitulo fill-width"
      >
        <div
          class="
            icon-diferencial
            d-flex
            justify-center
            align-center
            white
            mx-auto
            mb-3
          "
        >
          <object
            type="image/svg+xml"
            data="/portal-turismo/diferenciais/icones-03.svg"
          ></object>
        </div>

        <h3 class="line-height-1 smt-xs-10 smb-xs-20">
          <big>100%</big><br />ONLINE
        </h3>
      </v-flex>
      <v-flex
        data-aos="flip-left"
        data-aos-offset="100"
        data-aos-delay="400"
        xs12
        md3
        xl2
        class="text-center special-font c-secondary--text subtitulo fill-width"
      >
        <div
          class="
            icon-diferencial
            d-flex
            justify-center
            align-center
            white
            mx-auto
            mb-3
          "
        >
          <object
            type="image/svg+xml"
            data="/portal-turismo/diferenciais/icones-01.svg"
          ></object>
        </div>

        <h3 class="line-height-1 smt-xs-10 smb-xs-20">
          CURSOS FOCADOS<br />NA PRÁTICA
        </h3>
      </v-flex>
      <v-flex
        data-aos="flip-left"
        data-aos-offset="100"
        data-aos-delay="600"
        xs12
        md3
        xl2
        class="text-center special-font c-secondary--text subtitulo fill-width"
      >
        <div
          class="
            icon-diferencial
            d-flex
            justify-center
            align-center
            white
            mx-auto
            mb-3
          "
        >
          <object
            type="image/svg+xml"
            data="/portal-turismo/diferenciais/icones-02.svg"
          ></object>
        </div>
        <h3 class="line-height-1 smt-xs-10 smb-xs-20">
          EXPERIÊNCIA PROFISSIONAL<br />DE SUCESSO
        </h3>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    makeFlick() {
      let el = document.getElementsByClassName('diferenciais-flickity')[0]
      let options = {
        cellAlign: 'left',
        pageDots: true,
        // adaptiveHeight: true,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: true,
        fade: true,
      }
      let flk = new Flickity(el, options)
      if (innerWidth > 768) {
        flk.destroy()
      }
    },
  },
  mounted() {
    this.makeFlick()
    addEventListener('resize', this.makeFlick)
  },
}
</script>

<style lang="scss">
.diferenciais-flickity {
  .flickity-viewport {
    width: 100%;
  }
}
.icon-diferencial {
  width: 96px;
  height: 96px;
  border-radius: 80px 80px;
  border: 2px solid #f87400 !important;

  clr-icon {
    width: 60px;
    height: 60px;
  }
}
</style>