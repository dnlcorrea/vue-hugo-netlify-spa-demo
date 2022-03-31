<template>
  <div class="spx-24 smt-xs-20 smt-sm-20 smt-md-0 spt-24">
    <div class="mb-5 subtitulo c-secondary--text text-left">
      <span>MBAS</span>
    </div>
    <p class="c-info-darken-2--text text-left mb-4">
      Cursos de Pós-graduação para profissionais que desejam aprofundar
      conhecimentos na área de administração em Turismo e Hotelaria.
    </p>
    <div class="elevation-5 relative card-mba">
      <div
        class="
          fill-width fill-height
          absolute
          d-flex
          align-center
          bg-mba
          spl-sm-6
          spx-lg-24 spx-md-10
          flex-wrap
        "
        style="top: 0"
      >
        <v-flex
          xs12
          sm7
          md8
          lg6
          class="fill-height d-flex align-center spr-sm-3 spx-md-0"
        >
          <router-link
            :to="'/turismo-e-hotelaria/cursos?curso=' + mba.slug + '&type=mba'"
            style="position: relative"
          >
            <!-- <clr-icon :shape="mba.icon" class="white--text"></clr-icon> -->
            <h3
              class="
                line-height-1-5
                my-1
                titulo-banner
                white--text
                semibold
                mb-2
                mt-4
                uppercase
              "
            >
              <div class="hidden-lg-and-up">{{ mba.titulo }}</div>
              <big class="hidden-md-and-down">{{ mba.titulo }}</big>
            </h3>
            <p class="white--text p2 mb-2">
              Início:
              <span class="font-600">{{ setInicio(mba.inicio) }}</span> |
              Duração:
              <span class="font-600">{{ mba.duracao }}</span>
            </p>
            <p class="white--text p2 mb-5">
              <!-- {{ strip(mba.descricao) | truncate(95) }} -->
            </p>
            <v-btn
              class="c-primary"
              :to="
                '/turismo-e-hotelaria/cursos?curso=' + mba.slug + '&type=mba'
              "
              >SAIBA MAIS
              <v-icon class="ml-2" small>fas fa-arrow-right</v-icon></v-btn
            >
          </router-link>
        </v-flex>
        <v-flex xs12 sm5 md4 lg4 offset-lg2 offset-xl2 xl4 class="fill-height">
          <div
            class="
              spa-10
              matriz
              text-center
              d-flex
              align-center
              justify-center
              fill-height
            "
            src=""
            style="background: #00000061"
          >
            <div>
              <div class="subtitulo mb-3 font-600 white--text">
                <big>Confira o programa do seu curso!</big>
              </div>
              <p class="white--text line-height-1-5">
                Veja todas as informações da sua matriz curricular
              </p>
              <fale-conosco-btn-vue
                :texto="`<clr-icon shape='file' class='is-solid mr-2' style='margin-bottom:2px'></clr-icon> BAIXE AQUI`"
                titulo="BAIXAR MATRIZ CURRICULAR"
                :curso="mba.titulo"
                :redirect="`/turismo-e-hotelaria/${mba.slug}/matriz`"
              ></fale-conosco-btn-vue>
            </div></div
        ></v-flex>
      </div>
    </div>
  </div>
</template>
<script>
var striptags = require('striptags')
import FaleConoscoBtnVue from '../FaleConoscoBtn.vue'

export default {
  props: ['curso', 'classe'],
  computed: {
    mba: (v) => (v.curso ? v.curso : ''),
  },
  components: {
    FaleConoscoBtnVue,
  },
  methods: {
    setInicio(inicio) {
      if (typeof inicio === Array) {
        return inicio[0]
      } else {
        return inicio
      }
    },
    strip: (text) => striptags(text),
  },
}
</script>
<style lang='scss'>
.card-mba {
  padding-bottom: calc(450px - 10vw);
  min-height: 25vw;

  @media (max-width: 450px) {
    text-align: center;
    padding-bottom: 0px;

    .fill-height {
      height: auto !important;
    }
    .absolute {
      position: relative !important;
    }
  }
}

.bg-mba {
  background: url(/portal-turismo/bg-mba.jpg);
  background-size: 100%;
  background-position: center;
}
</style>