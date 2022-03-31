<template>
  <div style="overflow: hidden">
    <v-layout
      class="banner-portal-turismo align-center flex-wrap justify-center"
      :style="`background:linear-gradient(334deg,#2d386deb, #010208cf), url(${imagine(
        '/portal-turismo/banner.jpg'
      )}) center center / cover`"
    >
      <v-flex
        xs9
        md4
        lg3
        offset-md1
        offset-lg2
        class="special-font titulo-banner"
        style="z-index: 0"
      >
        <div>
          <div class="d-flex align-center relative">
            <div
              class="fill-height"
              style="
                margin-right: 20px;
                left: -30px;
                flex: 0;
                max-height: 100%;
                position: absolute;
                width: 14px;
              "
            >
              <object
                type="image/svg+xml"
                data="/portal-turismo/banner/logo-slice-04.svg"
                class="logo-0 fill-height"
              ></object>
            </div>
            <div class="fill-width">
              <object
                type="image/svg+xml"
                data="/portal-turismo/banner/logo-slice-03.svg"
                class="logo-1"
              >
                PORTAL DE
              </object>
              <object
                type="image/svg+xml"
                data="/portal-turismo/banner/logo-slice-02.svg"
                class="logo-2"
              >
                TURISMO &
              </object>
              <object
                type="image/svg+xml"
                data="/portal-turismo/banner/logo-slice-01.svg"
                class="logo-3"
              >
                HOTELARIA
              </object>
              <v-img
                style="margin-left: 5px; max-width: 250px"
                contain
                src="/logo-s-n.png"
                class="logo-4 smt-3"
                alt="Multiversa"
              >
              </v-img>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex xs10 md5 lg4 offset-md2 class="spr-20 spr-xs-0">
        <div class="opacity-in texto">
          <p class="white--text font-300">
            Espaço destinado a preparar, incentivar e desenvolver hubs e
            ecossistemas de inovação para o turismo em todo o país, por meio da
            promoção de conteúdo especializado, estímulo do mindset
            empreendedor, expansão da educação para a inovação, incentivo à
            transformação digital e do fortalecimento do mercado turístico.
          </p>
          <p class="white--text font-600">Quer saber mais?</p>
          <fale-conosco-btn-vue
            large
            titulo="FALE CONOSCO HOME"
            redirect="/turismo-e-hotelaria/home/whatsapp"
          ></fale-conosco-btn-vue>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import FaleConoscoBtnVue from '../FaleConoscoBtn.vue'
export default {
  components: {
    FaleConoscoBtnVue,
  },
  mounted() {
    this.$nextTick(function () {
      // DOM updated
      let logos = ['logo-1', 'logo-2', 'logo-3']
      function style(prop, element, value) {
        document.getElementsByClassName(element)[0].style[prop] = value
      }

      style('opacity', 'logo-4', 0)
      logos.forEach((element) => {
        style('opacity', element, 0)
      })
      setTimeout(() => {
        style('transform', 'logo-0', 'scale(1)')

        logos.forEach((element, i) => {
          style('opacity', element, 0)
          setTimeout(() => {
            style('animation', element, 'enter .7s')
            style('opacity', element, 1)
          }, i * 300)
        })
        setTimeout(() => {
          style('animation', 'logo-4', 'opacity .7s')
          style('opacity', 'logo-4', 1)
        }, 2000)
        setTimeout(() => {
          // style("animation", "logo-4", "opacity .7s");
          style('opacity', 'texto', 1)
        }, 2000)
      }, 1000)
    })
  },
}
</script>
<style lang="scss">
.banner-portal-turismo {
  height: 70vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    width: 82vw;
    height: 82vw;
    background: #2d386dbf;
    border-radius: 100%;
    position: absolute;
    top: -25vw;
    left: -30vw;
    animation: left 1.5s;
  }
  clr-icon {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 1024px) {
    height: 50vh;

    &:before {
      width: 115vw;
      height: 115vw;

      top: -21vw;
      left: -61vw;
    }
  }
  @media (max-width: 768px) {
    height: 100vh;

    &:before {
      width: 140vw;
      height: 140vw;
      top: -50vw;
      left: -30vw;
    }
  }
}
.logo-0 {
  transform: scaleY(0);
  transition: transform 0.7s 0.7s;
  will-change: transform;
  max-height: 100%;
}
.opacity-in {
  will-change: opacity;
  opacity: 0;
  transition: opacity 0.3s;
}
@keyframes left {
  from {
    transform: translateX(-100%) translateY(-100%);
  }
  to {
    transform: translateX(0) translateY(0);
  }
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes enter {
  from {
    transform: translateX(-20%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>