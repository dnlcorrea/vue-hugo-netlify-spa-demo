<template>
  <v-layout class="smt-24 spx-24 align-center flex-wrap">
    <v-flex xs12 :sm10="hasPrograma" :md8="hasPrograma">
      <div class="mb-5 subtitulo c-secondary--text">
        <span>O QUE VOCÊ SERÁ CAPAZ DE FAZER?</span>
      </div>
      <ul
        class="c-info-darken-2--text"
        :class="{ 'd-flex flex-wrap ': !hasPrograma }"
      >
        <li
          v-for="(competencia, i) in setCompetencias"
          :key="i"
          :class="{ 'li-style': !hasPrograma }"
        >
          <p>{{ competencia }}</p>
        </li>
      </ul>
    </v-flex>
    <v-flex
      xs12
      sm7
      md3
      offset-md1
      class="smy-xs-12 spl-sm-10 spl-md-0"
      v-show="hasPrograma"
    >
      <div
        class="border-padrao c-secondary--text spa-1 elevation-5"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="300"
      >
        <v-img
          class="
            white
            spa-10
            matriz
            text-center
            d-flex
            align-center
            justify-center
          "
          :src="imagine('/portal-turismo/matriz-bg.jpg')"
          aspect-ratio="0.76"
        >
          <div>
            <div class="subtitulo mb-3 font-600 c-secondary--text">
              <big>Confira o programa do seu curso!</big>
            </div>
            <p class="c-info-darken-2--text line-height-1-5">
              Veja todas as informações da sua matriz curricular
            </p>
            <fale-conosco-btn-vue
              :texto="`<clr-icon shape='file' class='is-solid mr-2' style='margin-bottom:2px'></clr-icon> BAIXE AQUI`"
              titulo="BAIXAR MATRIZ CURRICULAR"
              :curso="titulo"
              :redirect="`/turismo-e-hotelaria/${slug}/matriz`"
            ></fale-conosco-btn-vue>
          </div>
        </v-img>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import FaleConoscoBtnVue from '../FaleConoscoBtn.vue'

export default {
  props: ['competencias', 'titulo', 'slug'],
  // computed: {
  //   },
  components: {
    FaleConoscoBtnVue,
  },
  data() {
    return {
      hasPrograma: false,
    }
  },

  watch: {
    slug(newVal, oldVal) {
      console.log('Watching slug', newVal, oldVal)

      axios
        .head(`/docs/turismo-e-hotelaria/${newVal}.pdf`)
        .then(() => {
          this.hasPrograma = true
        })
        .catch(() => {
          this.hasPrograma = false
        })
    },
  },

  computed: {
    setCompetencias: (v) => (v.competencias ? JSON.parse(v.competencias) : []),
  },
}
</script>

<style lang="scss">
.matriz clr-icon {
  width: 20px;
  height: 20px;
}

.li-style {
  width: calc(33% - 50px);
  margin-right: 50px;

  @media (max-width: 789px) {
    width: 100%;
    margin-right: 0;
  }
}
</style>