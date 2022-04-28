<template>
  <div class="spb-24">
    <h1 class="font-500 main-title subtitulo">Componentes Curriculares</h1>
    <v-layout class="justify-space-between flex-wrap componentes-curriculares">
      <v-flex xs12 md6 class="spr-md-8">
        <v-expansion-panels v-model="panel" class="smt-4 expansion-panel-ead">
          <v-expansion-panel
            class="smb-3"
            v-for="(itens, index) in matrizes.slice(
              0,
              Math.ceil(matrizes.length / 2)
            )"
            :key="index"
            :disabled="disabled"
          >
            <v-expansion-panel-header>
              <div>
                <h2 class="font-600 c-secondary--text mb-0">
                  <i class="fas fa-caret-right c-primary--text mr-2"></i>
                  {{ itens.titulo }}
                </h2>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content v-if="itens.itens && itens.itens.length">
              <div v-for="(matrizes, j) in itens.itens" :key="j">
                <v-card flat class="spl-12 spx-xs-2">
                  <p class="regular titulo-cardc-secondary--text spr-6">
                    <span class="primary--text">
                      <i
                        class="fas fa-arrow-right c-primary--text mr-2 mt-1"
                      ></i>
                    </span>
                    <big>{{ matrizes }}</big>
                  </p>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
      <v-flex xs12 md6>
        <v-expansion-panels
          :disabled="disabled"
          v-model="panel2"
          class="smt-4 expansion-panel-ead"
        >
          <v-expansion-panel
            class="smb-3"
            v-for="(itens, index) in matrizes.slice(
              Math.ceil(matrizes.length / 2),
              matrizes.length
            )"
            :key="index"
          >
            <v-expansion-panel-header>
              <div>
                <h2 class="font-600 c-secondary--text mb-0">
                  <i class="fas fa-caret-right c-primary--text mr-2"></i>
                  {{ itens.titulo }}
                </h2>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content v-if="itens.itens && itens.itens.length">
              <div v-for="(matrizes, j) in itens.itens" :key="j">
                <v-card flat class="spl-12">
                  <p class="regular titulo-cardc-secondary--text spr-6">
                    <span class="primary--text">
                      <i
                        class="fas fa-arrow-right c-primary--text mr-2 mt-1"
                      ></i>
                    </span>
                    <big>{{ matrizes }}</big>
                  </p>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    matrizes: Array,
  },

  data() {
    return {
      panel: null,
      panel2: null,
    }
  },
  computed: {
    disabled() {
      let hasItems = this.matrizes.map((el) => {
        return el.itens ? !!el.itens.length : false
      })
      return !hasItems.find((a) => a === true)
    },
  },
}
</script>

<style lang="scss">
.componentes-curriculares {
  .v-item-group {
    transition: 0s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
  }
  .v-expansion-panel {
    transition: 0s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
  }
  .v-expansion-panel::before {
    transition: box-shadow 0ms cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  .v-expansion-panel-header {
    transition: 0s min-height cubic-bezier(0.25, 0.8, 0.5, 1) !important;
  }
  .v-expansion-panel-header:before {
    transition: 0s opacity cubic-bezier(0.25, 0.8, 0.5, 1) !important;
  }
}
</style>
