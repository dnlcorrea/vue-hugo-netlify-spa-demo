<template>
  <div :class="classes">
    <router-link
      to="/turismo-e-hotelaria#mbas"
      class="fill-height v-btn v-btn--flat c-secondary--text"
    >
      MBA
    </router-link>
    <!-- <router-link
      to="/turismo-e-hotelaria#masterclass"
      class="fill-height v-btn v-btn--flat c-secondary--text"
    >
      Masterclass
    </router-link> -->

    <router-link
      to="/turismo-e-hotelaria#cursos-de-desenvolvimento"
      class="fill-height v-btn v-btn--flat c-secondary--text"
    >
      Cursos&nbsp;de&nbsp;Desenvolvimento
    </router-link>

    <router-link
      to="/turismo-e-hotelaria#novidades-e-inovacoes"
      class="fill-height v-btn v-btn--flat c-secondary--text"
    >
      Novidades&nbsp;e&nbsp;Inovações
    </router-link>

    <router-link
      to="/turismo-e-hotelaria#contato"
      class="fill-height v-btn v-btn--flat c-secondary--text"
    >
      Contato
    </router-link>

    <a
      href="https://jacad.uniamerica.br/academico/aluno-v2/login"
      target="_blank"
      class="fill-height info-darken-2--text v-btn v-btn--flat"
    >
      Sou&nbsp;Aluno
    </a>
  </div>
</template>

<script>
export default {
  props: {
    classes: String,
  },
}
</script>

<style lang="scss">
.menu-mobile {
  .v-btn {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
}
</style>