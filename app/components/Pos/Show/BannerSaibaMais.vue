<template>
  <div>
    <v-layout
      class="
        wrap
        grey
        lighten-4
        fill-width
        align-center
        justify-center
        spy-lg-5 spy-sm-10 spy-xs-12
        smb-24
      "
    >
      <v-flex
        xs10
        sm6
        lg3
        class="d-flex align-center justify-center spt-xs-15 spb-xs-5"
      >
        <div class="text-center">
          <h2 class="c-secondary--text mb-5 font-400 titulo">
            <big>
              FICOU INTERESSADO <br />
              OU TEM DÚVIDAS?
            </big>
          </h2>
          <v-btn
            target="_blank"
            href="https://wa.me/+554531981100"
            class="c-primary mx-auto c-secondary--text"
          >
            <v-icon class="mr-2">fab fa-whatsapp</v-icon>
            <b>ENTRE EM CONTATO</b></v-btn
          >
        </div>
      </v-flex>
      <v-flex xs10 sm6 md4 lg3 offset-lg1 class="spb-xs-15 spy-10">
        <v-img :src="$imagine('/contato.png')"></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
const maxChars = (v) => v.length < 191 || 'Máx. 191 caracteres'
const required = (v) => !!v || 'Preenchimento obrigatório'

export default {
  props: ['curso'],
  data() {
    return {
      dialog: false,
      rules: {
        required: [maxChars, required],
        nome: [
          (v) => !!v || 'Preencha seu nome',
          (v) => v.length < 191 || 'Máx. 191 caracteres',
        ],
        email: [
          (v) => !!v || 'Preencha seu e-mail',
          (v) =>
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
            'Digite um e-mail válido.',
        ],
        celular: [(v) => !!v || 'Preencha seu celular'],
      },
      loading: false,
      disabled: false,
      submited: false,
      count: 3,
      inscricao: {
        nome: '',
        celular: '',
        email: '',
      },
    }
  },

  methods: {
    decrementCounter: function () {
      this.count -= 1
    },
    submit(event) {
      this.loading = true
      this.disabled = true
      setTimeout(() => {
        if (this.$refs.form.validate()) {
          event.target.submit()
          this.submited = true
        }
        this.loading = false
        this.disabled = false
      }, 1000)
    },
  },
}
</script>
<style lang='scss'>
.enter-check {
  animation: rotate 0.3s;

  @keyframes rotate {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
}
</style>