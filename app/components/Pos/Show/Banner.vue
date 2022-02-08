<template>
  <v-layout>
    <v-flex xs12>
      <div
        class="topo d-flex align-center justify-center"
        :style="`background-image: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.6)), url(${curso.img})`"
      >
        <div class="text-center fixed spx-15" style="z-index: 0">
          <!-- <v-divider class="c-primary smy-3"></v-divider> -->
          <h1 class="white--text titulo-banner smb-0 smt-15">
            {{ curso.name }}
          </h1>
          <!-- <v-divider class="c-primary smy-8"></v-divider> -->
          <v-btn class="c-primary mt-8" large
            ><big class="font-800">INSCREVA-SE</big></v-btn
          >
          <v-layout class="justify-center mt-5">
            <Scrolly anchor="#sobre" cor="#ececec"></Scrolly>
          </v-layout>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['curso'],
  data() {
    return {}
  },
}
</script>
<style lang='scss'>
.topo {
  height: 80vh;
  background-size: 110%;
  background-attachment: fixed;
  background-position: center;

  @media (max-width: 1024px) {
    background-size: 120%;
    background-attachment: fixed;
    height: 50vh;
  }
  @media (max-width: 600px) {
    background-size: 230%;
    height: 60vh;
  }
}
</style>