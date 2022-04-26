<template>
  <div
    class="c-secondary fill-width banner-principal d-flex align-center"
    :style="computedStyle"
  >
    <v-flex offset-md2 class="spl-lg-10 spl-sm-16 spl-xs-9">
      <div
        :style="marginTop ? { 'margin-top': marginTop } : ''"
        class="white--text font-100 txt-banner"
        style="text-shadow: 0 0 10px c-secondary"
      >
        <div
          class="font-400 txt1 line-height-1-2"
          style="text-shadow: #00000061 1px 1px 5px"
          :class="txt1Color ? txt1Color + '--text' : ''"
          :style="fontSize ? { 'font-size': fontSize } : ''"
        >
          {{ txt1 }}
        </div>
        <div
          class="font-800 txt2 line-height-1-2"
          style="text-shadow: #00000061 1px 1px 5px"
          :class="txt2Color ? txt2Color + '--text' : ''"
          :style="fontSize ? { 'font-size': fontSize } : ''"
        >
          {{ txt2 }}
        </div>
        <div
          v-if="txt3"
          class="font-800 txt3 line-height-1-2"
          style="text-shadow: #00000061 1px 1px 5px"
          :class="txt2Color ? txt2Color + '--text' : ''"
          :style="fontSize ? { 'font-size': fontSize } : ''"
        >
          {{ txt3 }}
        </div>
        <div class="slot">
          <slot></slot>
        </div>
      </div>
    </v-flex>
  </div>
</template>
<script>
export default {
  props: {
    hasMobileImg: Boolean,
    hasTabletImg: Boolean,
    img: String,
    txt1: String,
    txt2: String,
    txt3: String,
    height: String,
    txt1Color: String,
    txt2Color: String,
    marginTop: String,
    fontSize: String,
  },
  data() {
    return {
      estasubindo: false,
      oldScroll: 2,
    }
  },
  computed: {
    computedStyle() {
      let i
      if (this.hasMobileImg && this.$sc.isCell) {
        i = this.img.split('.')[0] + '-mobile' + '.' + this.img.split('.')[1]
      } else if (this.hasTabletImg && this.$sc.tabletAndDown) {
        i = this.img.split('.')[0] + '-tablet' + '.' + this.img.split('.')[1]
      } else {
        i = this.img ? this.img : '/quem-somos.jpg'
      }

      let img = `background: url(${imagine(i)}) center / cover`

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

      let slot = document.querySelector('.slot')

      if (slot) {
        let classListSlot = slot.classList

        if (this.estasubindo) {
          Array.from(classListSlot).includes('estadescendo')
            ? classListSlot.remove('estadescendo')
            : ''

          classListSlot.add('estasubindo')
        } else {
          Array.from(classListSlot).includes('estasubindo')
            ? classListSlot.remove('estasubindo')
            : ''

          classListSlot.add('estadescendo')
        }
      }
      let txt3 = document.querySelector('.txt3')

      if (txt3) {
        let classListtxt3 = txt3.classList

        if (this.estasubindo) {
          Array.from(classListtxt3).includes('estadescendo')
            ? classListtxt3.remove('estadescendo')
            : ''

          classListtxt3.add('estasubindo')
        } else {
          Array.from(classListtxt3).includes('estasubindo')
            ? classListtxt3.remove('estasubindo')
            : ''

          classListtxt3.add('estadescendo')
        }
      }
    })
  },
}
</script>

<style lang="scss">
.banner-principal {
  overflow-x: hidden;
  padding-top: 65px;
  &:not(.full-banner) {
    @media (max-width: 1024px) {
      padding-top: 0px;
      height: 60vh !important;
    }
  }
  &:not(.full-banner) {
    @media (max-width: 600px) {
      height: 65vh !important;
    }
  }
  &.full-banner {
    max-height: 100vh;
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
.slot,
.txt3 {
  animation: estasubindo 1.1s;
}
.slot.estasubindo,
.txt3.estasubindo {
  animation: estasubindo 1.1s;
}
.slot.estadescendo,
.txt3.estadescendo {
  animation: estadescendo 0.5s;
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