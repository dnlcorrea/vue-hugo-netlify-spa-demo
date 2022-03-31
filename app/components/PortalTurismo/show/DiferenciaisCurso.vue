<template>
  <div class="spx-24 grey lighten-3 spt-14 smb-10 smt-10">
    <div class="mb-5 subtitulo c-secondary--text text">
      <span>DIFERENCIAIS DO CURSO</span>
    </div>

    <v-layout class="flex-wrap">
      <v-flex
        v-for="({ titulo, descricao }, i) in diferenciais"
        :key="i"
        data-aos="fade-right"
        data-aos-offset="50"
        :data-aos-delay="(i + 1) * 100"
        xs12
        sm6
        md6
        xl4
        class="text-center c-secondary--text subtitulo2 d-flex smb-10 spr-10"
      >
        <div style="flex: 0 !important">
          <div
            class="
              icon-diferencial-curso
              d-flex
              justify-center
              align-center
              white
              mx-0
              spa-4
            "
          >
            <clr-icon shape="bolt"></clr-icon>
          </div>
        </div>

        <div>
          <h4
            class="
              line-height-1-5
              smt-xs-10
              smb-xs-20
              smt-1
              text-left
              spl-5
              font-500
            "
          >
            {{ titulo }}
          </h4>
          <p
            class="
              p2
              line-height-1-5
              smt-xs-10
              smb-xs-20
              text-left
              spl-5
              font-400
            "
          >
            {{ descricao }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ['diferenciais'],
}
</script>
<style lang='scss'>
.icon-diferencial-curso {
  width: calc(45px + 1vw);
  height: calc(45px + 1vw);
  border-radius: 80px 80px;
  border: 2px solid #f87400 !important;

  clr-icon {
    width: calc(35px + 1vw);
    height: calc(35px + 1vw);
  }
}
</style>