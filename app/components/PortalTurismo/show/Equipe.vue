<template>
  <div class="spx-24 spt-24 spb-10">
    <div class="mb-5 subtitulo c-secondary--text">
      <span>EQUIPE</span>
    </div>
    <v-layout class="flex-wrap">
      <v-flex
        xs12
        sm10
        md8
        lg5
        v-for="({ image, nome, curriculo }, i) in equipe"
        :key="i"
        class="d-flex smy-5 smr-10"
      >
        <div style="flex: 0 !important">
          <v-avatar
            size="calc(62px + 3vw)"
            class="border-padrao-2 primary--text"
          >
            <div>
              <v-img class="spa-15" :src="image" :alt="nome" />
            </div>
          </v-avatar>
        </div>
        <div>
          <h4
            class="
              line-height-1-5
              text-left
              spl-5
              font-500
              c-secondary--text
              subtitulo2
            "
          >
            <big>{{ nome }}</big>
          </h4>
          <p class="p2 line-height-1-2 spl-5 c-info-darken-2--text">
            {{ curriculo }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['equipe'],
}
</script>

<style>
</style>