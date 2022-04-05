<template>
  <div class="white">
    <PortalTurismoShowBanner
      :titulo="curso.name"
      :duracao="curso.duracao"
      :inscricao="curso.inscricao"
      :imagem="curso.img"
      :categoria="curso.categoria ? curso.categoria : 'Pós-graduação'"
    ></PortalTurismoShowBanner>

    <PortalTurismoShowSobreOCurso
      :inscricao="curso.inscricao"
      :titulo="curso.name"
      :descricao="curso.descricao"
      :duracao="curso.duracao"
      :slug="curso.slug"
      :inicio="curso.data_inicio"
      :carga_horaria="curso.carga_horaria"
      :investimento="decodedPrecos"
    ></PortalTurismoShowSobreOCurso>
    <!-- <PortalTurismoShowDiferenciaisCurso
      :diferenciais="curso.diferenciais"
    ></PortalTurismoShowDiferenciaisCurso>
    <PortalTurismoShowCompetencias
      :competencias="curso.competencias"
      :titulo="curso.name"
      :slug="curso.slug"
    ></PortalTurismoShowCompetencias>
    <PortalTurismoShowEquipe
      :equipe="curso.equipe"
      v-show="curso.equipe && curso.equipe.length"
      class="spb-20"
    ></PortalTurismoShowEquipe>
    <PortalTurismoShowCursosOnline
      class="smb-24 smt-10"
      titulo="OUTROS CURSOS"
      :except="curso.slug"
      :cursos="cursosArr"
      :classe="checkClass"
      v-if="cursosArr.length > 1"
    ></PortalTurismoShowCursosOnline>
    <PortalTurismoBannerFaleConosco
      :curso="curso.slug"
    ></PortalTurismoBannerFaleConosco>
    <PortalTurismoShowParceiros></PortalTurismoShowParceiros>
    <PortalTurismoShowSobreAUniamerica></PortalTurismoShowSobreAUniamerica>
    <PortalTurismoShowFormSaibaMais></PortalTurismoShowFormSaibaMais> -->
  </div>
</template>
<script>
import pos from '@/data/pos.js'
import cursos from '@/data/cursos-turismo.js'

export default {
  data() {
    return {
      curso: {},
      banner: {},
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(to)
      vm.setCurso(to.query.curso)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.setCurso(to.query.curso)
    next()
  },
  methods: {
    setCurso(to) {
      let source = this.checkClass === 'mbas' ? pos : cursos
      console.log(`setcursoto`, to)
      this.curso = source.find((c) => c.slug === to)
        ? source.find((c) => c.slug === to)
        : console.log('deu erro', to)
    },
  },
  computed: {
    loaded() {
      return !!Object.values(this.curso).length
    },
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
    decodedPrecos() {
      if (this.curso.investimento) {
        if (typeof this.curso.investimento === 'string') {
          return JSON.parse(this.curso.investimento)
        } else {
          return this.curso.investimento
        }
      } else {
        return []
      }
    },
    checkClass: (v) =>
      v.$route.query.type === 'mba' ? 'mbas' : 'cursos-online',
  },
  mounted() {
    let path = location.pathname.split('/')[3]

    setTimeout(() => {
      this.banner = this.$refs.banner
      // this.setCurso(path)
    }, 500)
  },
  beforeRouteUpdate(to, from, next) {
    this.$el.style.opacity = 0

    // this.setCurso(to)

    next()
  },
  updated() {
    setTimeout(() => {
      this.$el.style.opacity = 1
    }, 600)
  },
}
</script>
<style lang='scss'>
</style>