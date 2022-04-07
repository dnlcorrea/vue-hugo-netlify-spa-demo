<template>
  <div class="white">
    <div slot="submenu" class="fill-with">
      <FaculdadeSubmenu
        :isup="isup"
        :onFooter="onFooter"
        :banner="banner"
        class="hidden-md-and-down"
      ></FaculdadeSubmenu>
    </div>
    <PortalTurismoShowBanner
      :titulo="curso.name"
      :duracao="curso.duracao"
      :inscricao="curso.inscricao"
      :imagem="curso.img"
      :categoria="curso.categoria ? curso.categoria : 'Pós-graduação'"
      :inicio="setInicio"
      ref="banner"
    ></PortalTurismoShowBanner>

    <PortalTurismoShowSobreOCurso
      class="smx-24 smx-xs-0"
      :inscricao="curso.inscricao"
      :titulo="curso.name"
      :descricao="curso.descricao"
      :duracao="curso.duracao"
      :slug="curso.slug"
      :inicio="setInicio"
      :carga_horaria="curso.carga_horaria"
      :investimento="decodedPrecos"
      :type="checkClass"
    ></PortalTurismoShowSobreOCurso>
    <PortalTurismoShowDiferenciaisCurso
      :diferenciais="curso.diferenciais"
    ></PortalTurismoShowDiferenciaisCurso>
    <PortalTurismoShowCompetencias
      :competencias="curso.competencias"
      :titulo="curso.name"
      :slug="curso.slug"
      class="smx-24 smx-xs-0"
    ></PortalTurismoShowCompetencias>
    <PortalTurismoShowEquipe
      :equipe="curso.professores"
      v-show="curso.professores && curso.professores.length"
      class="spb-20 smx-24 smx-xs-0"
    ></PortalTurismoShowEquipe>
    <PortalTurismoBannerFaleConosco
      :curso="curso.name"
    ></PortalTurismoBannerFaleConosco>
    <PortalTurismoIndexCursosOnline
      class="smx-24 smx-xs-0 smt-10"
      titulo="OUTROS CURSOS"
      :except="curso.slug"
      :cursos="cursosArr"
      :classe="checkClass"
      v-if="cursosArr.length > 1"
    ></PortalTurismoIndexCursosOnline>

    <PortalTurismoParceiros></PortalTurismoParceiros>

    <PortalTurismoFormSaibaMais></PortalTurismoFormSaibaMais>
    <br />
    <br />
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
      cursosArr: [],
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.setCurso(to.query.curso)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.setCurso(to.query.curso)
    next()
  },
  methods: {
    setCurso(to) {
      let source =
        this.checkClass === 'mbas'
          ? pos.filter((a) => a.area === 'Turismo e Hotelaria')
          : cursos

      this.cursosArr = source

      this.curso = source.find((c) => c.slug === to)
        ? source.find((c) => c.slug === to)
        : console.log('404')
    },
  },
  computed: {
    setInicio() {
      let inicio
      if (this.checkClass === 'mbas') {
        inicio = this.curso.data_inicio
          ? this.curso.data_inicio +
            ' de ' +
            this.curso.mes_inicio +
            ' de ' +
            this.curso.ano_inicio
          : '' + this.curso.mes_inicio + ' de ' + this.curso.ano_inicio
      } else {
        inicio = this.curso.inicio
      }
      return inicio
    },
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
    setTimeout(() => {
      this.banner = this.$refs.banner
    }, 500)
  },
  beforeRouteUpdate(to, from, next) {
    this.$el.style.opacity = 0

    this.setCurso(to.query.curso)

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
.border-padrao {
  border: 1px solid currentColor;
}
.border-padrao-2 {
  border: 2px solid currentColor;
}
</style>