<template>
  <v-btn
    @click="openDialog"
    class="c-primary c-secondary--text mx-auto"
    :large="large"
    ><div
      class="d-flex align-center"
      v-html="
        texto
          ? texto
          : `<clr-icon shape='talk-bubbles' class='is-solid mr-2'></clr-icon> FALE CONOSCO`
      "
    ></div>
  </v-btn>
</template>
<script>
export default {
  props: {
    titulo: String,
    texto: String,
    curso: String,
    redirect: String,
    large: Boolean,
    eventName: String,
  },
  computed: {
    interesse() {
      let curso = this.curso ? '-' + this.curso : ''
      return this.titulo + curso
    },
  },
  methods: {
    openDialog() {
      let dialogInfo = {
        titulo: this.titulo ? this.titulo : 'FALE CONOSCO',
        curso: this.curso ? this.curso : '',
      }
      $nuxt.$bus.$emit(
        this.eventName ? this.eventName : 'openDialog',
        dialogInfo
      )
    },
  },
}
</script>
<style lang='scss'>
</style>