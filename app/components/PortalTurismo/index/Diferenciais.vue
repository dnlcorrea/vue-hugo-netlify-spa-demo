<template>
  <div class="spy-24 grey lighten-3">
    <v-layout class="justify-center text-center smb-15">
      <v-flex xs11 sm10 md8 lg6 xl6>
        <p class="c-secondary--text">
          <big>
            O Portal de Turismo e Hotelaria e um espaço destinado a preparar,
            incentivar e desenvolver hubs e ecossistemas de inovação para o
            turismo em todo o país, por meio da promoção de conteúdo
            especializado, estímulo do mindset empreendedor, expansão da
            educação para a inovação, incentivo à transformação digital e do
            fortalecimento do mercado turístico.
          </big>
        </p>
      </v-flex>
    </v-layout>
    <v-layout class="justify-center flex-wrap diferenciais-flickity">
      <v-flex
        data-aos="flip-left"
        data-aos-delay="100"
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

        <h5 class="line-height-1-2 font-300 smt-xs-10 smb-xs-20">
          <big>100%</big><br />online
        </h5>
      </v-flex>
      <v-flex
        data-aos="flip-left"
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
            data="/portal-turismo/diferenciais/icones-01.svg"
          ></object>
        </div>

        <h5 class="line-height-1-2 font-300 smt-xs-10 smb-xs-20">
          Cursos focados<br />na prática
        </h5>
      </v-flex>
      <v-flex
        data-aos="flip-left"
        data-aos-delay="300"
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
        <h5 class="line-height-1-2 font-300 smt-xs-10 smb-xs-20">
          Experiência profissional<br />de sucesso
        </h5>
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