<template>
  <div>
    <div class="d-flex align-center mb-4">
      <i class="fas fa-bookmark mr-2" style="font-size: 16px"></i>
      <h3>CATEGORIAS</h3>
    </div>

    <div
      v-for="(cat, i) in categorias"
      :key="i"
      class="my-2 hidden-sm-and-down"
    >
      <router-link
        :to="`/${contexto}/categoria/${cat.slug}`"
        class="no-underline c-primary-darken-3--text"
      >
        <i class="fas fa-arrow-right mr-1" style="font-size: 16px"></i>

        {{ cat.nome }}</router-link
      >
    </div>
    <v-select
      class="hidden-md-and-up"
      :items="categorias"
      item-text="nome"
      item-value="slug"
      v-model="selectCategoria"
      label="Selecionar categoria"
      clearable
      @click:clear="$router.push(`/${contexto}`)"
      @input="
        selectCategoria !== null
          ? $router.push(`/${contexto}/categoria/${selectCategoria}`)
          : ''
      "
    ></v-select>
  </div>
</template>
<script>
export default {
  props: ['categorias', 'contexto'],
  data() {
    return {
      selectCategoria: '',
    }
  },
  watch: {
    $route(to, from) {
      this.selectCategoria = to.params.slug
    },
  },
  mounted() {
    this.selectCategoria = this.$route.params.slug
  },
}
</script>
<style lang='scss'>
</style>