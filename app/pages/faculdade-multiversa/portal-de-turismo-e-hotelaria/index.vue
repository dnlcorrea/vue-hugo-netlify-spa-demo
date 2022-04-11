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
    <PortalTurismoIndexBanner ref="banner"></PortalTurismoIndexBanner>
    <div class="spx-24">
      <PosCarousel
        id="pos"
        :cursos="posTurismo"
        tipo="pos-graduacao"
        titulo="Mbas"
        subtitulo="Cursos de Pós-graduação para profissionais que desejam aprofundar conhecimentos na área de administração em Turismo e Hotelaria."
        doFlick
        class="spt-20"
      ></PosCarousel>
      <PosCarousel
        id="pos"
        :cursos="cursos"
        titulo="Cursos Online"
        tipo="extensao-digital"
        subtitulo="Cursos de Atualização e de Aperfeiçoamento para seu desenvolvimento profissional."
        doFlick
      ></PosCarousel>
    </div>
    <PortalTurismoIndexDiferenciais></PortalTurismoIndexDiferenciais>

    <v-layout
      class="flex-wrap align-center justify-space-between smb-9 spx-24 spt-24"
    >
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

    <PosShowBannerSaibaMais></PosShowBannerSaibaMais>
    <PortalTurismoParceiros></PortalTurismoParceiros>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import pos from '@/data/pos.js'
import blog from '@/data/blog.js'
import cursos from '@/data/cursos-turismo.js'

export default {
  data() {
    return {
      menuMobile: false,
      cursos,
      banner: {},
    }
  },
  computed: {
    blogs() {
      return blog
        .filter((a) =>
          a.categoria.find((c) => c.slug === 'turismo-e-hotelaria')
        )
        .slice(0, 4)
    },
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
    posTurismo() {
      return pos.filter((a) => a.area === 'Turismo e Hotelaria').slice(0, 2)
    },
  },
  mounted() {
    setTimeout(() => {
      this.banner = this.$refs.banner
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