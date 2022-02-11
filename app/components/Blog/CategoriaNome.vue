<template>
  <v-layout class="justify-center mt-5">
    <h2 class="text-center bold" v-show="categoriaName">
      <span class="c-primary spx-5"
        ><i
          class="fas fa-bookmark mr-1"
          style="font-size: 18px; margin-bottom: 1px"
        ></i>
        {{ categoriaName }}
      </span>
    </h2>
    <v-btn
      v-show="categoriaName"
      :ripple="false"
      :to="`/${contexto}`"
      icon
      style="border-radius: 0 !important; height: 35px !important"
      class="ma-0 c-primary"
      small
      ><v-icon>fas fa-times</v-icon></v-btn
    >
  </v-layout>
</template>
<script>
export default {
  props: ['blog', 'contexto'],

  computed: {
    categoriaName() {
      if (this.blog) {
        let cat = this.blog.find((a) =>
          a.categoria.find((c) => c.slug === this.$parent.categoria)
        )
        let categoria = cat
          ? cat.categoria.find((c) => c.slug === this.$parent.categoria).nome
          : ''
        return categoria
      }
    },
  },
}
</script>
<style lang='scss'>
</style>