<template>
  <div
    class="c-secondary fill-width banner-principal d-flex align-center"
    :style="computedStyle"
  >
    <v-flex offset-md2 offset-xs1 class="spl-10">
      <div
        :style="marginTop ? { 'margin-top': marginTop } : ''"
        class="white--text font-100 txt-banner"
        style="text-shadow: 0 0 10px c-secondary"
      >
        <div
          class="font-400 txt1 line-height-1-2"
          :class="txt1Color ? txt1Color + '--text' : ''"
        >
          {{ txt1 }}
        </div>
        <div
          class="font-800 txt2 line-height-1-2"
          :class="txt2Color ? txt2Color + '--text' : ''"
        >
          {{ txt2 }}
        </div>
      </div>
    </v-flex>
  </div>
</template>
<script>
export default {
  props: [
    'img',
    'txt1',
    'txt2',
    'height',
    'txt1Color',
    'txt2Color',
    'marginTop',
  ],
  data() {
    return {
      estasubindo: false,
      oldScroll: 2,
    }
  },
  computed: {
    computedStyle() {
      let i = this.img ? this.img : '/quem-somos.jpg'
      let img = `background: url(${i}) center / cover`

      let h = this.height ? this.height : 'calc(50vh + 50px)'
      let height = `height: ${h}`

      let top = `top: 0`

      let style = `${img}; ${top}; ${height}`

      return style
    },
  },
  mounted() {
    addEventListener('scroll', () => {
      let estasubindo = this.oldScroll > scrollY
      this.estasubindo = estasubindo
      this.oldScroll = scrollY

      let text1 = document.querySelector('.txt1')
      let text2 = document.querySelector('.txt2')

      if (text1 && text2) {
        let classList1 = text1.classList
        let classList2 = text2.classList

        if (this.estasubindo) {
          Array.from(classList1).includes('estadescendo')
            ? classList1.remove('estadescendo')
            : ''
          Array.from(classList2).includes('estadescendo')
            ? classList2.remove('estadescendo')
            : ''
          classList1.add('estasubindo')
          classList2.add('estasubindo')
        } else {
          Array.from(classList1).includes('estasubindo')
            ? classList1.remove('estasubindo')
            : ''
          Array.from(classList2).includes('estasubindo')
            ? classList2.remove('estasubindo')
            : ''
          classList1.add('estadescendo')
          classList2.add('estadescendo')
        }
      }
    })
  },
}
</script>

<style lang="scss">
.banner-principal {
  overflow-x: hidden;
  min-height: 500px;
  @media (max-width: 1024px) {
    max-height: 50vh;
  }
}
.banner-principal .txt-banner {
  font-size: calc(40px + 2vw);
}
.txt2 {
  animation: estasubindo 0.9s;
}
.txt1 {
  animation: estasubindo 0.7s;
}
.txt2.estasubindo {
  animation: estasubindo 0.9s;
}
.txt2.estadescendo {
  animation: estadescendo 0.7s;
  margin-left: 100vw;
}

.txt1.estasubindo {
  animation: estasubindo 0.7s;
}
.txt1.estadescendo {
  animation: estadescendo 0.9s;
  margin-left: 100vw;
}

@keyframes estasubindo {
  from {
    margin-left: -100vw;
  }
  to {
    margin-left: 0;
  }
}
@keyframes estadescendo {
  from {
    margin-left: 0;
  }
  to {
    margin-left: 100vw;
  }
}
</style>