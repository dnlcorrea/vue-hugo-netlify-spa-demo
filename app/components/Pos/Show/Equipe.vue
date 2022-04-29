<template>
  <div class="spb-24 smx-24 spx-24">
    <div class="smb-12 subtitulo c-secondary--text">
      <span class="main-title">Corpo Docente</span>
    </div>

    <v-layout wrap>
      <v-flex
        class="d-flex spb-15"
        sm6
        lg4
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
            <big>{{ professor.nome }}</big>
          </h4>
          <p
            class="light curriculo-professor line-height-1-2 spl-6 spr-10 spt-2"
          >
            <small>{{ professor.curriculo | truncate(200) }}</small>
            <v-btn
              style="height: 18px; width: 18px"
              v-if="
                professor.curriculo.length > 200 ||
                (professor.livros && professor.livros.length)
              "
              @click="
                dialog = true
                selectedProfessor = professor
              "
              icon
            >
              <v-icon style="width: 10px">fas fa-plus</v-icon>
            </v-btn>
          </p>
        </div>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="900">
      <v-card>
        <v-card-title class="c-info-lighten-2">
          <h4 class="font-600 c-secondary--text spl-6">
            <big>{{ selectedProfessor.nome }}</big>
          </h4>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="
              dialog = false
              selectedProfessor = {}
            "
            ><v-icon>fas fa-times</v-icon></v-btn
          >
        </v-card-title>
        <v-card-text class="spb-13">
          <p
            class="
              light
              curriculo-professor
              line-height-1-2
              spl-6
              spr-10
              spt-10
              spb-5
            "
          >
            <big>{{ selectedProfessor.curriculo }}</big>
          </p>
          <div
            v-if="selectedProfessor.livros && selectedProfessor.livros.length"
          >
            <div class="d-flex flex-wrap">
              <v-img
                contain
                height="250"
                :src="livro"
                v-for="(livro, i) in selectedProfessor.livros"
                :key="i"
              ></v-img>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['professores'],
  data() {
    return {
      dialog: false,
      selectedProfessor: {},
    }
  },
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
