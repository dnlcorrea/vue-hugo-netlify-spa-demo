<template>
  <div class="white">
    <div class="fill-width">
      <v-toolbar class="d-flex justify-space-between info-lighten-3" fixed>
        <v-toolbar-title class="spx-24">
          <router-link
            :to="{ name: 'home' }"
            class="
              special-font
              reset-flex
              d-flex
              align-center
              justify-center
              font-600
            "
          >
            <div class="d-flex align-center">
              <object
                type="image/svg+xml"
                data="/portal-turismo/logo-portal-turismo-03.svg"
                class="logo-menu"
              ></object>
            </div>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down spx-24">
          <PortalTurismoMenuItems
            classes="d-flex fill-height"
          ></PortalTurismoMenuItems>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up spx-24">
          <v-btn icon @click="menuMobile = !menuMobile">
            <v-icon>fas fa-bars</v-icon></v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer temporary fixed v-model="menuMobile" right>
        <v-layout justify-space-between pt-4 pl-4 pb-3>
          <router-link
            :to="{ name: 'home' }"
            class="
              special-font
              reset-flex
              d-flex
              align-center
              justify-center
              font-600
            "
          >
            <div class="d-flex align-center">
              <object
                type="image/svg+xml"
                data="/portal-turismo/logo-portal-turismo-03.svg"
                class="logo-menu"
              ></object>
            </div>
          </router-link>
          <v-btn icon @click="menuMobile = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
        </v-layout>
        <PortalTurismoMenuItems classes="menu-mobile"></PortalTurismoMenuItems>
      </v-navigation-drawer>
    </div>
    <banner></banner>
    <!-- <mba-banner
      :curso="mbas[0]"
      classe="mbas"
      v-show="mbas.length"
    ></mba-banner> -->
    <cursos-online
      id="mbas"
      titulo="MBAS"
      subtitulo="Cursos de Pós-graduação para profissionais que desejam aprofundar conhecimentos na área de administração em Turismo e Hotelaria."
      :cursos="mbas"
      classe="mbas"
      v-show="mbas.length"
      class="spt-20"
    ></cursos-online>
    <masterclass class="spb-20"></masterclass>
    <cursos-online
      id="cursos-de-desenvolvimento"
      titulo="CURSOS ONLINE"
      subtitulo="Cursos de Atualização e de Aperfeiçoamento para seu desenvolvimento profissional."
      :cursos="cursos"
      classe="cursos-online"
    ></cursos-online>
    <diferenciais></diferenciais>
    <!-- 
		<div class="spx-24 spy-5" id="novidades-e-inovacoes">
			<ultimas-noticias
				class="smt-24 smb-5"
				titulo="NOVIDADES E INOVAÇÕES"
				tag="turismo-e-hotelaria"
			></ultimas-noticias>
		</div> -->

    <!-- <cursos-online
      titulo="MBAS"
      subtitulo="Cursos de Pós-graduação para profissionais que desejam aprofundar conhecimentos na área de administração em Turismo e Hotelaria."
      :cursos="mbas"
      classe="mbas"
      v-show="mbas.length"
    ></cursos-online> -->

    <banner-fale-conosco></banner-fale-conosco>
    <parceiros></parceiros>
    <!-- <newsletter name="Newsletter Portal de Turismo e Hotelaria"></newsletter> -->

    <form-saiba-mais></form-saiba-mais>
  </div>
</template>

<script>
import mbas from '@/data/mbas.js'

import cursos from '@/components/PortalTurismo/cursos-turismo'

import Banner from '@/components/PortalTurismo/index/Banner.vue'
// import ultimasNoticias from '@/components/home/UltimasNoticias.vue'
import Diferenciais from '@/components/PortalTurismo/index/Diferenciais.vue'
import CursosOnline from '@/components/PortalTurismo/index/CursosOnline.vue'
import Masterclass from '@/components/PortalTurismo/index/Masterclass.vue'
import FormSaibaMais from '@/components/PortalTurismo/FormSaibaMais.vue'
import BannerFaleConosco from '@/components/PortalTurismo/BannerFaleConosco.vue'
import Parceiros from '@/components/PortalTurismo/Parceiros.vue'
// import Newsletter from '@/components/portal-professor/index/Newsletter.vue'
import MbaBanner from '@/components/PortalTurismo/index/MbaBanner.vue'

export default {
  data() {
    return {
      menuMobile: false,
      cursos,
      mbas,
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
  mounted() {
    axios
      .get('http://uniamerica.br/api/portal-turismo/mba')
      .then(({ data }) => {
        this.mbas = data.data
      })

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
  background-color: #ececec;
  color: $c-secondary;
  font-weight: 600;
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