<template>
  <div>
    <div class="d-flex align-center mb-4">
      <i class="fas fa-bookmark mr-2" style="font-size: 16px"></i>
      <h3>CATEGORIAS</h3>
    </div>

    <div v-for="(cat, i) in categorias" :key="i" class="my-2">
      <a
        :href="`/${contexto}/categoria/${cat.slug}`"
        class="no-underline c-primary-darken-3--text"
      >
        <i class="fas fa-arrow-right mr-1" style="font-size: 16px"></i>

        {{ cat.nome }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ['categorias', 'contexto'],
}
</script>
<style lang='scss'>
</style>