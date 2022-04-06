<template>
  <div class="spx-24" id="masterclass">
    <v-layout align-center justify-space-between>
      <div class="mb-5 subtitulo c-secondary--text text-left">
        <span class="subtitulo c-secondary--text main-title">Masterclass</span>
      </div>
    </v-layout>

    <!-- <v-layout
      class="flex-wrap masterclass-flickity"
      style="
        margin-left: calc(-10px - 0.5vw) !important;
        margin-right: calc(-10px - 0.5vw) !important;
      "
    >
      <v-flex
        xs12
        md4
        class="spx-10 spb-xs-10 spb-sm-10 spb-md-0 relative"
        v-for="(masterclass, i) in masterclasses"
        :key="i"
      >
        <div class="elevation-0 transparent noticia-cell">
          <a :href="`/eventos/${masterclass.slug}`">
            <div
              class="absolute px-2 white--text p"
              style="
                right: calc(33px + 1vw);
                top: -4px;
                background: darkorange;
                z-index: 2;
                font-weight: 600 !important;
              "
            >
              <small>GRÁTIS</small>
            </div>
            <v-img
              :src="imagine(masterclass.imagem)"
              aspect-ratio="1.77"
              class="smb-6 elevation-5"
              style="border: 4px solid white"
            ></v-img>
            <span
              class="c-info-darken-2--text p2 smb-1"
              v-if="masterclass.dt_inicio == masterclass.dt_fim"
            >
              {{ format(masterclass.dt_inicio) }}
            </span>
            <span class="c-info-darken-2--text p2 smb-3" v-else>
              {{ format(masterclass.dt_inicio) }} à
              {{ format(masterclass.dt_fim) }}
            </span>
            <div class="secondary--text subtitulo2 mb-0 semibold">
              {{ strip(masterclass.titulo) | truncate(65) }}
            </div>
            <div
              v-if="masterclass.linha_fina"
              class="secondary--text subtitulo2 mb-2 regular"
            >
              <small>{{ strip(masterclass.linha_fina) | truncate(65) }}</small>
            </div>

            <p class="p2 c-info-darken-2--text mb-5">
              {{ strip(masterclass.corpo) | truncate(93) }}
            </p>
          </a>
        </div>
        <v-layout
          align-center
          class="fill-width absolute spr-20"
          style="bottom: 0"
        >
          <div style="width: calc(100% - 100px)">
            <v-divider class="smr-3"></v-divider>
          </div>
          <div>
            <v-btn
              :href="'/eventos/' + masterclass.slug"
              class="
                mr-0
                d-flex
                align-center
                justify-center
                btn-padrao
                c-secondary--text
              "
              style="height: 25px; width: 100px"
            >
              <small
                class="text-center text-uppercase font-500 spr-2"
                style="line-height: 1.2"
                >saiba mais</small
              >
              <v-icon style="font-size: 12px">fas fa-chevron-right </v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-flex>
    </v-layout> -->
    <v-layout
      class="flex-wrap masterclass-flickity"
      style="
        margin-left: calc(-10px - 0.5vw) !important;
        margin-right: calc(-10px - 0.5vw) !important;
      "
    >
      <v-flex xs12 class="spx-5 spb-xs-10 spb-sm-10 spb-md-0 relative">
        <!-- v-for="(masterclass, i) in masterclasses"
        :key="i" -->
        <div class="elevation-0 transparent noticia-cell">
          <a href="https://rd.uniamerica.br/pos-live-turismo-4-11">
            <v-layout
              class="
                align-center
                flex-wrap
                bg-masterclass
                spl-lg-24 spl-sm-6 spl-xs-6
                spt-sm-10 spt-xs-10 spt-md-0
              "
            >
              <v-flex xs12 md7>
                <h3 class="white--text text-left titulo-banner semibold">
                  Conversas incríveis com <br class="hidden-xs-only" />
                  profissionais do Turismo e Hotelaria.
                </h3>
                <v-chip class="c-primary c-secondary--text hand smt-6 semibold">
                  <i class="fas fa-certificate mr-2"></i>
                  COM CERTIFICADO</v-chip
                >
                <br class="hidden-lg-and-down" />
                <v-chip class="c-primary c-secondary--text hand smt-6 semibold">
                  100% ONLINE E GRATUITO</v-chip
                >
              </v-flex>
              <v-flex xs12 md5>
                <v-img
                  :src="
                    imagine(
                      '/portal-turismo/masterclass/festival-de-turismo-2.jpg'
                    )
                  "
                  aspect-ratio="1.9"
                  class="smy-6 smr-6 elevation-5"
                  style="border: 4px solid white"
                ></v-img>
              </v-flex>
            </v-layout>
          </a>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
var striptags = require('striptags')

export default {
  data() {
    return {
      masterclasses: [],
    }
  },
  // methods: {
  //   format(data) {
  //     return moment(data).format("DD.MM.YYYY");
  //   },
  //   encerrada(data) {
  //     return moment().subtract(1, "day").isAfter(data);
  //   },
  //   strip: (text) => striptags(text),
  //   makeFlick() {
  //     let el = document.getElementsByClassName("masterclass-flickity")[0];
  //     let options = {
  //       cellAlign: "left",
  //       pageDots: this.masterclasses.length > 1 ? true : false,
  //       adaptiveHeight: true,
  //       wrapAround: true,
  //       prevNextButtons: false,
  //     };
  //     let flk = new Flickity(el, options);
  //     if (innerWidth > 768) {
  //       flk.destroy();
  //     }
  //   },
  // },
  mounted() {
    // axios
    //   .get("api/portal-turismo/eventos")
    //   .then(({ data }) => {
    //     this.masterclasses = data.data;
    //   })
    //   .then(() => {
    //     this.makeFlick();
    //   });
    // addEventListener("resize", this.makeFlick);
  },
}
</script>

<style lang="scss">
.masterclass-flickity {
  margin-left: calc(-10px - 0.5vw) !important;
  margin-right: calc(-10px - 0.5vw) !important;
  .flickity-viewport {
    width: 100%;
  }
  @media (max-width: 768px) {
    .flex {
      min-width: 100%;
    }
  }
}
.bg-masterclass {
  background: url('/portal-turismo/masterclass/bg.jpg');
  background-blend-mode: color-burn;
  transition: all 0.5s linear;
  background-size: 100%;
  background-position: center;
}
</style>

