<template>
  <v-layout
    class="smb-24 spx-24 flex-wrap justify-center"
    v-if="competencias && competencias.length"
  >
    <v-flex xs12 :sm10="hasPrograma" :md8="hasPrograma" :lg6="hasPrograma">
      <div class="mb-5 subtitulo c-secondary--text main-title">
        <span>O que você será capaz de fazer?</span>
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
      offset-lg0
      class="smt-xs-12 spl-sm-10 spl-md-0"
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
          aspect-ratio="0.8"
        >
          <div>
            <div class="subtitulo mb-3 font-600 c-secondary--text">
              <big>Confira o programa do seu curso!</big>
            </div>
            <p class="c-info-darken-2--text line-height-1-5">
              Veja todas as informações da sua matriz curricular
            </p>
            <v-btn
              class="c-primary c-secondary--text mx-auto"
              :href="`/docs/turismo-e-hotelaria/${slug}.pdf`"
              target="_blank"
              ><clr-icon shape="bolt" class="is-solid mr-1"></clr-icon> BAIXE
              AQUI JÁ
            </v-btn>
          </div>
        </v-img>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['competencias', 'titulo', 'slug', 'checkClass'],

  data() {
    return {
      hasPrograma: false,
    }
  },

  watch: {
    slug(newVal, oldVal) {
      this.$axios
        .head(`/docs/${this.checkClass}/${newVal}.pdf`)
        .then(() => {
          this.hasPrograma = true
        })
        .catch(() => {
          this.hasPrograma = false
        })
    },
  },

  computed: {
    setCompetencias: (v) => (v.competencias ? v.competencias : []),
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