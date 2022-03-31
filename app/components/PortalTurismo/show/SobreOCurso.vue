<template>
  <div class="spx-24" style="z-index: 0; position: relative">
    <div class="flex-wrap">
      <!-- <v-flex class="xs12 md7 lg8 spt-24"> -->
      <div class="smb-10 subtitulo c-secondary--text spt-18 hidden-md-and-up">
        <span>SOBRE O CURSO</span>
      </div>
      <p class="c-info-darken-2--text hidden-md-and-up" v-html="descricao"></p>
      <!-- </v-flex> -->
      <!-- <v-flex class="xs12 md4 lg3 offset-md1 xs12 smy-xs-10 smy-sm-10 smy-md-0"> -->
      <div
        class="
          border-padrao
          primary--text
          spa-1
          elevation-5
          sml-md-5
          card-float
        "
        style="background: #00000021"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="300"
      >
        <v-layout class="white spa-10 flex-wrap">
          <v-flex xs12 sm6 md12>
            <p class="c-info-darken-2--text">Curso Online</p>
            <v-divider></v-divider>
            <p class="c-info-darken-2--text mb-0 mt-3">
              <clr-icon shape="hourglass" class="primary--text"></clr-icon>
              Duração:
              <span class="c-info-darken-2--text font-500">{{ duracao }}</span>
            </p>
            <p class="c-info-darken-2--text mb-0">
              <clr-icon shape="clock" class="primary--text"></clr-icon> Carga
              Horária:
              <span class="c-info-darken-2--text font-500">{{
                carga_horaria
              }}</span>
            </p>
            <p class="c-info-darken-2--text mb-3">
              <clr-icon shape="calendar" class="primary--text"></clr-icon>
              <span v-if="inicio">Início:</span>
              <span v-if="inicio" class="c-info-darken-2--text font-500">{{
                inicio
              }}</span>
              <span v-else>Assíncrono</span>
            </p>
            <p
              class="grey--text text--darken-2"
              v-if="titulo === 'MBA em Gestão e Inovação em Hotelaria'"
            >
              <small>Em breve mais informações</small>
            </p>
          </v-flex>
          <v-flex xs12 sm6 md12 class="spl-sm-20 spl-md-0">
            <v-divider
              class="hidden-sm-only"
              :class="{ 'mb-4': !precos.length }"
            ></v-divider>
            <p class="c-info-darken-2--text mb-0 mt-4" v-if="precos.length">
              {{ menorPrecoLabel }}
            </p>
            <p class="titulo-banner c-secondary--text" v-if="precos.length">
              <small>R$</small><big class="bold">{{ menorPrecoValor }}</big
              ><small>,00</small>
              <v-btn icon class="mx-0" @click="dialogPrecos = true">
                <clr-icon shape="info-standard" size="22"></clr-icon>
              </v-btn>
            </p>
            <fale-conosco-btn-vue
              titulo="FALE CONOSCO"
              :redirect="`/turismo-e-hotelaria/${slug}/whatsapp`"
              :curso="titulo"
            ></fale-conosco-btn-vue>
          </v-flex>
        </v-layout>
      </div>
      <div class="smb-10 subtitulo c-secondary--text spt-18 hidden-sm-and-down">
        <span>SOBRE O CURSO</span>
      </div>
      <p
        class="c-info-darken-2--text hidden-sm-and-down"
        v-html="descricao"
      ></p>
      <!-- </v-flex> -->
    </div>

    <v-dialog v-model="dialogPrecos" width="90vw" max-width="600px">
      <v-card>
        <v-card-title class="grey lighten-3 justify-space-between"
          ><h3 class="secondary--text font-600">FORMAS DE PAGAMENTO</h3>
          <v-btn icon class="mx-0" @click="dialogPrecos = false">
            <v-icon small class="c-info-darken-2--text"
              >fas fa-times</v-icon
            ></v-btn
          ></v-card-title
        >
        <v-card-text class="spy-10 spx-10">
          <v-layout
            class="align-center"
            v-for="({ label, valor }, i) in precos"
            :key="i"
          >
            <p class="mb-0 c-info-darken-2--text">{{ label }}</p>
            <div class="dots smx-5"></div>
            <p class="mb-0 c-secondary--text font-500">
              <big>
                <small>
                  R$<big class="font-700">{{ fazerPonto(valor) }}</big
                  ><span>,00</span>
                </small>
              </big>
            </p>
          </v-layout>
          <v-layout class="spt-10 spb-3 justify-center">
            <fale-conosco-btn-vue
              large
              :texto="`<clr-icon shape='bolt' class='is-solid mr-1'></clr-icon> INSCREVA-SE JÁ`"
              titulo="INSCREVA-SE"
              :curso="titulo"
              :redirect="inscricao"
            ></fale-conosco-btn-vue>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import FaleConoscoBtnVue from '../FaleConoscoBtn.vue'

export default {
  data() {
    return {
      dialogPrecos: false,
    }
  },
  components: {
    FaleConoscoBtnVue,
  },
  props: [
    'descricao',
    'duracao',
    'inicio',
    'carga_horaria',
    'precos',
    'inscricao',
    'titulo',
    'slug',
  ],
  methods: {
    fazerPonto(valor) {
      if (valor.toString().length > 3) {
        let ultimos = valor
          .toString()
          .slice(valor.toString().length - 3, valor.toString().length)
        let primeiros = valor.toString().slice(0, valor.toString().length - 3)

        return primeiros + '.' + ultimos
      } else {
        return valor
      }
    },
  },
  computed: {
    menorPreco(v) {
      if (v.precos) {
        let min = Math.min(...v.precos.map((item) => item.valor))
        let result = v.precos.filter((item) => item.valor === min)
        return result[0]
      }
    },
    menorPrecoLabel(v) {
      return v.menorPreco?.label
    },
    menorPrecoValor(v) {
      return v.menorPreco?.valor
    },
  },
}
</script>
<style lang='scss'>
.dots {
  border-top: 1px dotted #cacaca;
  flex: 1;
}
.card-float {
  @media (min-width: 1024px) {
    float: right;
    margin-top: calc(-48px - 2.4vw) !important;
  }
}
</style>