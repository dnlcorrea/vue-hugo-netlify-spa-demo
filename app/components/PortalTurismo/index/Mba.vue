<template>
  <div class="spt-24 spx-24 spb-10">
    <div class="mb-3 subtitulo c-secondary--text text-left">
      <span>{{ titulo }}</span>
    </div>
    <p class="c-info-darken-2--text text-left mb-4">
      {{ subtitulo }}
    </p>

    <v-layout class="flex-wrap curso-flickity" :class="classe">
      <v-flex
        xs12
        md4
        class="
          text-center
          spx-10
          text-left
          smb-xs-20 smb-sm-20 smb-md-0
          relative
        "
        style="position: relative"
        v-for="(curso, i) in cursosFiltrado"
        :key="i"
      >
        <router-link
          :to="'/portal-de-turismo-e-hotelaria/cursos?curso=' + curso.slug"
          :class="
            curso.categoria === 'Curso de Atualização'
              ? 'c-primary--text'
              : 'c-secondary--text'
          "
          style="position: relative"
        >
          <v-img
            cover
            :src="imagine(curso.imagem)"
            aspect-ratio="1.77"
            class="curso-img elevation-5"
          >
            <span
              class="px-2 curso-label text-uppercase white--text font-600"
              :class="
                curso.categoria === 'Curso de Atualização'
                  ? 'c-primary'
                  : 'c-secondary'
              "
            >
              <small>{{ curso.categoria }} &nbsp; </small>
            </span>
          </v-img>
          <h3
            class="line-height-1 my-1 subtitulo2 semibold mb-2 mt-4"
            :class="
              curso.categoria === 'Curso de Atualização'
                ? 'c-primary--text'
                : 'c-secondary--text'
            "
          >
            {{ curso.titulo }}
          </h3>
          <p class="c-info-darken-2--text p2 mb-2">
            Início: <span class="font-600">{{ curso.inicio }}</span> | Duração:
            <span class="font-600">{{ curso.duracao }}</span>
          </p>
          <p class="c-info-darken-2--text p2 mb-5">
            {{ strip(curso.descricao) | truncate(95) }}
          </p>
        </router-link>

        <v-layout
          align-center
          class="absolute fill-width spr-20"
          style="bottom: 0"
        >
          <div style="width: calc(100% - 100px)">
            <v-divider class="mr-3"></v-divider>
          </div>
          <v-btn
            class="mr-0 d-flex align-center justify-center btn-padrao"
            style="height: 25px; width: 100px"
          >
            <small
              class="
                text-center
                c-secondary--text
                text-uppercase
                font-500
                spr-2
              "
              style="line-height: 1.2"
              >saiba mais</small
            >
            <v-icon style="font-size: 12px">fas fa-chevron-right </v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
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
  margin-left: calc(-20px - 1vw) !important;
  margin-right: calc(-20px - 1vw) !important;
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