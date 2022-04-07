<template>
  <div>
    <div class="spx-24">
      <div class="mb-5 subtitulo c-secondary--text text-left">
        <span class="main-title">{{ titulo }}</span>
      </div>
      <p class="c-info-darken-2--text text-left mb-4">
        {{ subtitulo }}
      </p>
    </div>

    <v-layout
      class="flex-wrap curso-flickity smb-xs-10 smb-sm-10 smb-md-0 spx-24"
      :class="classe"
    >
      <v-flex
        xs12
        :md4="classe !== 'mbas'"
        :md6="classe === 'mbas'"
        :xl3="classe !== 'mbas'"
        :xl4="classe === 'mbas'"
        class="
          text-center
          spx-5
          text-left
          smb-xs-20 smb-sm-20 smb-md-20
          relative
        "
        style="position: relative"
        v-for="(curso, i) in cursosFiltrado"
        :key="i"
        data-aos="fade-right"
        data-aos-offset="100"
        :data-aos-delay="(i + 1) * 100"
      >
        <router-link
          :to="cursoPath(curso.slug)"
          :class="
            curso.categoria === 'Curso de Atualização'
              ? 'c-primary-darken-1--text text-left'
              : curso.categoria === 'Pós-graduação'
              ? 'white--text text-center'
              : 'c-secondary--text text-left'
          "
          style="position: relative; text-decoration: none"
        >
          <v-img
            cover
            v-if="curso.img"
            :src="imagine(curso.img)"
            aspect-ratio="1.77"
            class="curso-img elevation-5"
            :class="
              curso.categoria === 'Curso de Atualização'
                ? 'c-primary-darken-1--text'
                : curso.categoria === 'Pós-graduação'
                ? 'white--text'
                : 'c-secondary--text'
            "
          >
            <span
              class="px-2 curso-label text-uppercase font-600"
              :class="
                curso.categoria === 'Curso de Atualização'
                  ? 'c-primary-darken-1 white--text'
                  : curso.categoria === 'Pós-graduação'
                  ? 'white c-secondary--text'
                  : 'c-secondary white--text'
              "
            >
              <small>{{ curso.categoria }} &nbsp; </small>
            </span>
            <div
              v-if="classe === 'mbas'"
              class="d-flex align-center justify-center spa-10 fill-height"
            >
              <div>
                <h3
                  class="
                    line-height-1-5
                    my-1
                    titulo
                    semibold
                    mb-2
                    white--text
                    uppercase
                  "
                >
                  <big>{{ curso.name }}</big>
                </h3>
                <p class="white--text mb-2">
                  Início:
                  <span class="font-600">{{ setInicio(curso) }}</span>
                  | Duração:
                  <span class="font-600">{{ curso.duracao }} meses</span>
                </p>
                <v-btn
                  class="c-primary ml-0 c-secondary--text"
                  :to="
                    '/faculdade-multiversa/portal-de-turismo-e-hotelaria/cursos?curso=' +
                    curso.slug +
                    '&type=mba'
                  "
                  >SAIBA MAIS
                  <v-icon class="ml-2" small>fas fa-arrow-right</v-icon></v-btn
                >
              </div>
            </div>
          </v-img>
          <div
            v-else
            class="elevation-5 relative"
            style="padding-bottom: 56.4972%"
          >
            <div
              class="fill-width fill-height absolute d-flex align-center bg-mba"
              style="top: 0"
            >
              <!-- <clr-icon :shape="curso.icon" class="white--text"></clr-icon> -->
            </div>
          </div>
          <h3
            class="line-height-1-5 my-1 subtitulo2 font-600 mb-2 mt-4"
            v-if="classe !== 'mbas'"
            :class="
              curso.categoria === 'Curso de Atualização'
                ? 'c-primary-darken-1--text'
                : 'c-secondary--text'
            "
          >
            {{ curso.name }}
          </h3>
          <p class="c-info-darken-2--text p2 mb-2" v-if="classe !== 'mbas'">
            <span v-if="setInicio(curso)">Início:</span>
            <span class="font-600" v-if="setInicio(curso)"
              >{{ setInicio(curso) }} | </span
            ><span v-else> Assíncrono | </span>Duração:
            <span class="font-600">{{ curso.duracao }}</span>
          </p>
          <p class="c-info-darken-2--text p2 mb-5" v-if="classe !== 'mbas'">
            {{ strip(curso.descricao) | truncate(95) }}
          </p>
        </router-link>

        <v-layout
          v-if="classe !== 'mbas'"
          align-center
          class="absolute fill-width spr-20 spt-10"
          style="bottom: -15px"
        >
          <div style="width: calc(100% - 100px)">
            <v-divider class="mr-3"></v-divider>
          </div>
          <v-btn
            :to="cursoPath(curso.slug)"
            class="mr-0 d-flex align-center justify-center btn-padrao"
            :class="
              curso.categoria === 'Curso de Atualização'
                ? 'c-primary-darken-1--text'
                : 'c-secondary--text'
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
        </v-layout>
      </v-flex>
    </v-layout>
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
        <feOffset dx="3" dy="3" result="offsetblur"></feOffset>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.7"></feFuncA>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </svg>
  </div>
</template>

<script>
var striptags = require('striptags')
export default {
  props: ['titulo', 'subtitulo', 'except', 'cursos', 'classe'],

  computed: {
    cursosFiltrado: (v) =>
      v.except ? v.cursos.filter((c) => c.slug !== v.except) : v.cursos,
  },
  methods: {
    setInicio(curso) {
      let inicio
      if (this.classe === 'mbas') {
        inicio = curso.data_inicio
          ? curso.data_inicio +
            ' de ' +
            curso.mes_inicio +
            ' de ' +
            curso.ano_inicio
          : '' + curso.mes_inicio + ' de ' + curso.ano_inicio
      } else {
        inicio = curso.inicio
      }
      return inicio
    },
    cursoPath(slug) {
      let type = this.classe === 'mbas' ? '&type=mba' : ''
      return (
        '/faculdade-multiversa/portal-de-turismo-e-hotelaria/cursos?curso=' +
        slug +
        type
      )
    },
    strip: (text) => striptags(text),

    makeFlick() {
      let el = document.getElementsByClassName(this.classe)[0]
      let options = {
        cellAlign: 'left',
        pageDots: true,
        adaptiveHeight: false,
        wrapAround: true,
        prevNextButtons: false,
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
.curso-label {
  line-height: 11px;
  padding: 5px;
  position: absolute;
  top: -2px;
  left: -2px;
  box-shadow: 4px 4px 4px #00000033;
  border-radius: 0 0 30px;
}
.curso-img {
  overflow: visible;
  border: 4px solid currentColor;
}

.curso-flickity {
  margin-left: calc(-10px - 0.5vw) !important;
  margin-right: calc(-10px - 0.5vw) !important;
  .flickity-viewport {
    width: 100%;
  }

  @media (max-width: 768px) {
    .flickity-viewport {
      height: 550px !important;
    }
    .flex {
      min-width: 100%;
    }
  }
  @media (max-width: 500px) {
    .flickity-viewport {
      height: 371px !important;
    }
  }
}
</style>