<template>
  <div class="spb-24 smx-24 spx-24">
    <div class="smb-12 subtitulo c-secondary--text">
      <span class="main-title">Equipe</span>
    </div>

    <v-layout wrap>
      <v-flex
        class="d-flex spb-15"
        md6
        v-for="(professor, i) in professores"
        :key="i"
      >
        <div>
          <div class="border-prof-img c-primary--text">
            <v-img
              :src="$imagine(professor.image)"
              class="professor-image-pos"
            ></v-img>
          </div>
        </div>
        <div>
          <h4 class="font-600 c-secondary--text spl-6">
            <big>{{ professor.nome_curto || professor.nome }}</big>
          </h4>
          <p
            class="light curriculo-professor line-height-1-2 spl-6 spr-10 spt-2"
          >
            <small>{{ professor.curriculo }}</small>
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['professores'],
}
</script>

<style lang="scss">
.professor-image-pos {
  width: calc(90px + 1vw);
  height: calc(90px + 1vw);
  border-radius: 100%;
}
.border-prof-img {
  width: calc(100px + 1vw);
  height: calc(100px + 1vw);
  border-radius: 100%;
  border: 1px solid currentColor;
  padding: 4px;
}
</style>
