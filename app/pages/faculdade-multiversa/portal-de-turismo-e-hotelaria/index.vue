<template>
  <div class="white">
    <div slot="submenu" class="fill-with">
      <FaculdadeSubmenu
        :isup="isup"
        :onFooter="onFooter"
        :banner="banner"
        class="hidden-md-and-down"
      ></FaculdadeSubmenu>
    </div>
    <banner ref="banner"></banner>
    <diferenciais></diferenciais>

    <PortalTurismoIndexCursosOnline
      id="mbas"
      titulo="MBAS"
      subtitulo="Cursos de Pós-graduação para profissionais que desejam aprofundar conhecimentos na área de administração em Turismo e Hotelaria."
      :cursos="posTurismo"
      classe="mbas"
      v-show="posTurismo.length"
      class="spt-20"
    ></PortalTurismoIndexCursosOnline>
    <masterclass class="spb-20"></masterclass>
    <PortalTurismoIndexCursosOnline
      id="cursos-de-desenvolvimento"
      titulo="Cursos Online"
      subtitulo="Cursos de Atualização e de Aperfeiçoamento para seu desenvolvimento profissional."
      :cursos="cursos"
      classe="cursos-online"
    ></PortalTurismoIndexCursosOnline>

    <v-layout class="flex-wrap align-center justify-space-between smb-9 spx-24">
      <h1 class="font-500 smy-0 main-title subtitulo">Novidades e Inovações</h1>
      <v-btn
        to="/blog-multiversa/categoria/turismo-e-hotelaria"
        outlined
        small
        class="my-0 c-primary--text"
        ><span class="c-secondary--text">VER TUDO</span></v-btn
      >
    </v-layout>
    <v-layout
      style="margin: 0 calc(-8px - 0.4vw) !important"
      class="flex-wrap spx-24 spb-10"
    >
      <v-flex
        xs12
        sm6
        md3
        class="spx-4 spb-10"
        v-for="(blog, i) in blogs"
        :key="i"
      >
        <BlogCard :blog="blog" contexto="blog-multiversa"></BlogCard>
      </v-flex>
    </v-layout>

    <banner-fale-conosco></banner-fale-conosco>
    <parceiros></parceiros>

    <form-saiba-mais></form-saiba-mais>
  </div>
</template>

<script>
import pos from '@/data/pos.js'
import blog from '@/data/blog.js'
import cursos from '@/data/cursos-turismo.js'

import Banner from '@/components/PortalTurismo/index/Banner.vue'
import Diferenciais from '@/components/PortalTurismo/index/Diferenciais.vue'
import CursosOnline from '@/components/PortalTurismo/index/CursosOnline.vue'
import Masterclass from '@/components/PortalTurismo/index/Masterclass.vue'
import FormSaibaMais from '@/components/PortalTurismo/FormSaibaMais.vue'
import BannerFaleConosco from '@/components/PortalTurismo/BannerFaleConosco.vue'
import Parceiros from '@/components/PortalTurismo/Parceiros.vue'
import MbaBanner from '@/components/PortalTurismo/index/MbaBanner.vue'

export default {
  data() {
    return {
      menuMobile: false,
      cursos,
      banner: {},
    }
  },
  components: {
    Banner,
    // ultimasNoticias,
    Diferenciais,
    CursosOnline,
    Masterclass,
    FormSaibaMais,
    BannerFaleConosco,
    // Newsletter,
    MbaBanner,
    Parceiros,
  },
  computed: {
    blogs() {
      return blog
        .filter((a) =>
          a.categoria.find((c) => c.slug === 'turismo-e-hotelaria')
        )
        .slice(0, 4)
    },
    posTurismo() {
      return pos.filter((a) => a.area === 'Turismo e Hotelaria').slice(0, 2)
    },
  },
  mounted() {
    setTimeout(() => {
      this.banner = this.$refs.banner
      console.log(this.$refs.banner)
    }, 500)
    setTimeout(() => {
      if (location.hash) {
        let element = document.querySelector(location.hash)
        element.scrollIntoView()
      }
    }, 1300)
  },
}
</script>

<style lang="scss">
@import '@/../scss/_color_set';

.special-font {
  font-family: 'Teko', sans-serif;
}

#app {
  // font-family: 'Prompt', sans-serif;
}
.loading-padrao {
  content: url('/imgs/uad.png');
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 20%;
  z-index: 10;
  animation: rotate 1s;
  animation-iteration-count: infinite;

  @keyframes rotate {
    0% {
      transform: rotatey(0deg) scale(0.5);
    }
    100% {
      transform: rotatey(360deg) scale(0.5);
    }
  }
}

a {
  text-decoration: none;
  color: $c-primary;
}
.reset-flex {
  flex: unset !important;
}

//
.back-to-top {
  float: right;
  bottom: 0px;
  right: 18px;
  border: none;
  border-radius: 0 !important;
  z-index: 5;
  width: 40px !important;
  height: 48px !important;

  @media (max-width: 959px) {
    display: none !important;
  }
}

.subtitulo span {
  padding: 6px 10px;
  color: $c-secondary;
}

.bg-portal-turismo {
  background: linear-gradient(180deg, #5fca75, #6ef19b);
}

.bg-portal-turismo-2 {
  background: linear-gradient(165deg, #f3f3ff, #e5f8f0);
}

.border-padrao {
  border: 1px solid currentColor;
}
.border-padrao-2 {
  border: 2px solid currentColor;
}
</style>