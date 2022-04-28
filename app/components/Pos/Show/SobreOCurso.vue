<template>
  <div style="z-index: 0; position: relative">
    <div class="flex-wrap">
      <!-- <v-flex class="xs12 md7 lg8 spt-24"> -->
      <div class="smb-5 subtitulo c-secondary--text spt-18 hidden-lg-and-up">
        <span class="main-title">Sobre o curso</span>
      </div>
      <div
        class="c-info-darken-2--text hidden-lg-and-up smb-24"
        v-html="descricao"
      ></div>

      <div
        class="
          border-padrao
          c-primary--text
          spa-1
          elevation-5
          sml-lg-15
          card-float
          smb-lg-3 smb-xs-20 smb-sm-20
        "
        style="background: #00000021; max-width: "
        :style="{
          width: $sc.desktopAndUp ? 'calc(400px + 15vw)' : '100%',
        }"
      >
        <!-- data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="300" -->
        <v-layout class="white spa-10 flex-wrap">
          <div>
            <p class="c-secondary--text subtitulo" v-if="modalidade">
              <small>Curso {{ modalidade }}</small>
            </p>
            <v-divider v-if="modalidade"></v-divider>
            <p class="c-secondary--text mb-0 mt-3" v-if="inicio">
              <clr-icon
                shape="calendar"
                class="c-primary-darken-1--text mb-1 mr-1"
              ></clr-icon>
              <big>Início:</big>
            </p>
            <div
              v-if="inicio"
              class="c-info-darken-2--text font-500 mb-2 ml-6 mt-0"
              v-html="inicio"
            ></div>

            <p class="c-secondary--text mb-2 mt-3">
              <clr-icon
                shape="hourglass"
                class="c-primary-darken-1--text mb-1 mr-1"
              ></clr-icon>
              <big>Duração:</big>
            </p>
            <p class="c-info-darken-2--text font-500 ml-6 mt-0">
              {{ duracao }} <span v-if="type === 'pos-graduacao'">meses</span>
            </p>
            <p class="c-secondary--text mb-2 mr-1">
              <clr-icon
                shape="clock"
                class="c-primary-darken-1--text mb-1 mr-1"
              ></clr-icon>
              <big>Carga Horária:</big>
            </p>
            <p
              class="c-info-darken-2--text font-500 ml-6 mt-0"
              v-html="carga_horaria"
            ></p>

            <p
              class="grey--text text--darken-2"
              v-if="titulo === 'MBA em Gestão e Inovação em Hotelaria'"
            >
              <small>Em breve mais informações</small>
            </p>

            <v-divider :class="{ 'mb-4': !investimento.length }"></v-divider>
            <p
              class="c-info-darken-2--text mb-0 mt-7"
              v-if="investimento.length"
            >
              {{ menorPrecoLabel }}
            </p>
            <p
              class="titulo-banner c-secondary--text"
              v-if="investimento.length"
            >
              <small>R$</small
              ><span class="font-800"> {{ menorPrecoValor }}</span
              ><small>,00</small>
              <v-btn
                icon
                class="mx-0"
                v-if="investimento.length > 1"
                @click="dialoginvestimento = true"
              >
                <clr-icon shape="info-standard" size="22"></clr-icon>
              </v-btn>
            </p>
            <v-btn
              v-if="inscricao"
              class="c-primary c-secondary--text mx-auto"
              :href="inscricao"
              target="_blank"
              ><clr-icon shape="bolt" class="is-solid mr-1"></clr-icon>
              INSCREVA-SE JÁ
            </v-btn>
          </div>
        </v-layout>
      </div>
      <div class="smb-5 subtitulo c-secondary--text spt-18 hidden-md-and-down">
        <span class="main-title">Sobre o curso</span>
      </div>
      <div
        class="c-info-darken-2--text hidden-md-and-down smb-24"
        v-html="descricao"
      ></div>
      <!-- </v-flex> -->
    </div>

    <v-dialog v-model="dialoginvestimento" width="90vw" max-width="600px">
      <v-card>
        <v-card-title class="grey lighten-3 justify-space-between"
          ><h3 class="c-secondary--text font-600">FORMAS DE PAGAMENTO</h3>
          <v-btn icon class="mx-0" @click="dialoginvestimento = false">
            <v-icon small class="c-info-darken-2--text"
              >fas fa-times</v-icon
            ></v-btn
          ></v-card-title
        >
        <v-card-text class="spy-10 spx-10">
          <div v-if="investimento">
            <v-layout
              class="align-center mb-2"
              v-for="({ label, valor }, i) in investimento"
              :key="i"
            >
              <p class="mb-0 c-info-darken-2--text">
                <big>{{ label }}</big>
              </p>
              <div class="dots smx-5"></div>
              <p class="mb-0 c-secondary--text font-500">
                <big>
                  <big>
                    R$<big class="font-700"> {{ fazerPonto(valor) }}</big
                    ><span>,00</span>
                  </big>
                </big>
              </p>
            </v-layout>
          </div>
          <v-layout class="spt-10 spb-3 justify-center">
            <v-btn
              v-if="inscricao"
              class="c-primary c-secondary--text mx-auto"
              :href="inscricao"
              target="_blank"
              ><clr-icon shape="bolt" class="is-solid mr-1"></clr-icon>
              INSCREVA-SE JÁ
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialoginvestimento: false,
    }
  },
  props: [
    'descricao',
    'duracao',
    'inicio',
    'modalidade',
    'carga_horaria',
    'investimento',
    'inscricao',
    'titulo',
    'slug',
    'type',
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
      if (v.investimento) {
        let min = Math.min(...v.investimento.map((item) => item.valor))
        let result = v.investimento.filter((item) => item.valor === min)
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
  @media (min-width: 1280px) {
    float: right;
    margin-top: calc(-48px - 2.4vw) !important;
  }
}
</style>